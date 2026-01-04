import { useShowModal } from "../contexts/taskContext";

export default function Modal({ children }) {
  const showModal = useShowModal();
  return (
    <div className={`${showModal ? "scale-100" : "scale-0"} modal`}>
      {children}
    </div>
  );
}
