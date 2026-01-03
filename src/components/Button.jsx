export default function Button({
  children = null,
  name = null,
  classes,
  onClick,
  type = null,
}) {
  return (
    <button className={`${classes} button`} onClick={onClick} type={type}>
      {children}
      {name}
    </button>
  );
}
