const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require("mongoose");

const Event = require("./models/event");

const app = express();

const events = [];

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: buildSchema(`
      type Event {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
      }

      input EventInput {
         title: String!
         description: String!
         price: Float!
         dtate: String!
      }
        
      type RootQuery {
            events: [Event!]!
        }

        type RootMutation {
            createEvent(eventInput: EventInput): Event
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return events;
      },
      createEvent: (args) => {
       // const event = {
         // _id: Math.random().toString(),
          //title: args.eventInput.title,
          //description: args.eventInput.description,
          //price: +args.eventInput.price,
          //date: args.eventInput.date
        //};
        const event = new Event({
          title: args.eventInput.title,
          description: args.eventInput.description,
          price: +args.eventInput.price,
          date: new Date (args.eventInput.date)
        });
        events.push(event);
        return event;
      }
    },
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster6.molmfpt.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=Cluster6`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
