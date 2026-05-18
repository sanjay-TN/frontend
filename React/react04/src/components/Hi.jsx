// destructuring of props
function Hi({ name, emoji, msg }) {
  // const { name, msg } = props;
  return (
    <h1>
      {/* {props.msg}
      {props.name} */}
      {msg} {emoji} {name}
    </h1>
  );
}

export default Hi;
