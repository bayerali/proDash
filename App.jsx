export default function App() {
  return (
    <div className="board-page">
      <header className="board-header">
        <div className="board-header__main">
          <p className="board-eyebrow">Produktion</p>
          <h1 className="board-title">Execution Board</h1>
          <p className="board-subtitle">
            Frühschicht · 04.06.2026 · CWID A12345 · Linie 2
          </p>
        </div>

        <div className="board-header__meta">
          <div className="meta-card">
            <span className="meta-card__label">Shift status</span>
            <strong className="meta-card__value">Running</strong>
          </div>
          <div className="meta-card">
            <span className="meta-card__label">Last update</span>
            <strong className="meta-card__value">08:42</strong>
          </div>
        </div>
      </header>

      <section className="kpi-strip" aria-label="Shift KPIs">
        <article className="kpi-card">
          <span className="kpi-card__label">Selected</span>
          <strong className="kpi-card__value">18</strong>
        </article>
        <article className="kpi-card">
          <span className="kpi-card__label">Done</span>
          <strong className="kpi-card__value">11</strong>
        </article>
        <article className="kpi-card">
          <span className="kpi-card__label">Open</span>
          <strong className="kpi-card__value">5</strong>
        </article>
        <article className="kpi-card kpi-card--danger">
          <span className="kpi-card__label">Blocked</span>
          <strong className="kpi-card__value">2</strong>
        </article>
        <article className="kpi-card kpi-card--warning">
          <span className="kpi-card__label">Handover</span>
          <strong className="kpi-card__value">4</strong>
        </article>
      </section>

      <section className="board-toolbar" aria-label="Board controls">
        <div className="board-toolbar__group">
          <button className="toolbar-btn toolbar-btn--active">All</button>
          <button className="toolbar-btn">Open</button>
          <button className="toolbar-btn">In progress</button>
          <button className="toolbar-btn">Done</button>
          <button className="toolbar-btn">Blocked</button>
        </div>

        <div className="board-toolbar__group">
          <input
            className="toolbar-input"
            type="search"
            placeholder="Search activity"
          />
          <button className="toolbar-btn">Prepare handover</button>
        </div>
      </section>

      <main className="board-layout">
        <section className="board-main" aria-label="Task execution area">
          <section className="task-group">
            <div className="task-group__header">
              <h2>Open tasks</h2>
              <span>5 activities</span>
            </div>

            <div className="task-list">
              <article className="task-card task-card--open">
                <div className="task-card__top">
                  <div>
                    <h3>MO Start</h3>
                    <p>Start-up checklist</p>
                  </div>
                  <span className="task-badge">Open</span>
                </div>

                <div className="task-card__meta">
                  <span>Due 08:30</span>
                  <span>Needs photo proof</span>
                </div>

                <p className="task-card__note">
                  Waiting for confirmation from previous shift on machine reset.
                </p>

                <div className="task-card__actions">
                  <button className="action-btn action-btn--primary">Start</button>
                  <button className="action-btn">Done</button>
                  <button className="action-btn">Block</button>
                  <button className="action-btn">Photo</button>
                </div>
              </article>

              <article className="task-card task-card--progress">
                <div className="task-card__top">
                  <div>
                    <h3>Linienkennzeichnung</h3>
                    <p>Visual control</p>
                  </div>
                  <span className="task-badge task-badge--info">In progress</span>
                </div>

                <div className="task-card__meta">
                  <span>Started 08:14</span>
                  <span>Operator note added</span>
                </div>

                <div className="task-card__actions">
                  <button className="action-btn action-btn--primary">Done</button>
                  <button className="action-btn">Details</button>
                  <button className="action-btn">Photo</button>
                </div>
              </article>

              <article className="task-card task-card--blocked">
                <div className="task-card__top">
                  <div>
                    <h3>Abnahme</h3>
                    <p>Quality release</p>
                  </div>
                  <span className="task-badge task-badge--danger">Blocked</span>
                </div>

                <div className="task-card__meta">
                  <span>Blocked 08:27</span>
                  <span>Handover required</span>
                </div>

                <p className="task-card__note">
                  Material deviation found. Next shift must verify with QA.
                </p>

                <div className="task-card__actions">
                  <button className="action-btn">Unblock</button>
                  <button className="action-btn">Add note</button>
                  <button className="action-btn">Escalate</button>
                </div>
              </article>
            </div>
          </section>
        </section>

        <aside className="board-side" aria-label="Handover and alerts">
          <section className="side-panel">
            <div className="side-panel__header">
              <h2>Handover</h2>
              <span>4 items</span>
            </div>

            <ul className="handover-list">
              <li className="handover-item">
                <strong>Abnahme</strong>
                <p>Blocked by QA check. Incoming shift to continue follow-up.</p>
              </li>
              <li className="handover-item">
                <strong>MO Ende</strong>
                <p>Still pending. Machine cleaning not completed yet.</p>
              </li>
              <li className="handover-item">
                <strong>Material</strong>
                <p>Low stock on line 2. Confirm refill before restart.</p>
              </li>
            </ul>

            <button className="full-width-btn">Open handover summary</button>
          </section>

          <section className="side-panel">
            <div className="side-panel__header">
              <h2>Alerts</h2>
              <span>2 active</span>
            </div>

            <div className="alert-list">
              <article className="alert-card alert-card--warning">
                <strong>Missing proof</strong>
                <p>2 completed activities still have no image.</p>
              </article>

              <article className="alert-card alert-card--danger">
                <strong>Blocked task</strong>
                <p>Abnahme is preventing line closeout.</p>
              </article>
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}