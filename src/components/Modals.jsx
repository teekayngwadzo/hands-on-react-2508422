export default ({ memberInfo, handleClose }) => {
  return (
    <dialog id="modal-member" open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handeClose}
        ></a>
        <hgroup>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "200px" }}
              src={`images/${memberInfo.slug}.svg`}
              alt={memberInfo.name}
            />
            <hgroup>
              <h1>{memberInfo.name}</h1>
              <p>{memberInfo.bio}</p>
            </hgroup>
          </div>
        </hgroup>
      </article>
    </dialog>
  );
};
