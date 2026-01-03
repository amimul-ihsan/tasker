export default function Modal({ children, showModal }) {
  return (
    <div className={`${showModal ? "scale-100" : "scale-0"} modal`}>
      {children}
    </div>
  );
}
