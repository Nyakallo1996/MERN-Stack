export default function Post() {
    return (
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2024/07/Screenshot-2024-07-25-at-1.57.32%E2%80%AFPM.jpg?w=1024"
            alt=""
          />
        </div>
        <div className="text">
          <h2>Full House</h2>
          <p className="info">
            <a className="author">Nyakallo</a>
            <time>2024-07-28 20:30</time>
          </p>
          <p className="summary">
            todayIt starts innocuously enough, with a father talking about how
            much his daughter loves Sydney McLaughlin-Levrone (she “might even
            be the world’s number one Sydney fan”). Apparently, she wants to
            write the Olympic gold medalist a fan letter and needs her dad’s
            help — and that’s where things take a turn.
          </p>
        </div>
      </div>
    );
}