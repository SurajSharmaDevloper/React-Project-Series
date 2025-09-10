import Button from "./Button";
import Input from "./Input";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string) => void;
  initialValue: string;
}

export default function Modal({ isOpen, onClose, onSubmit, initialValue }: ModalProps) {
  if (!isOpen) return null;

  let inputValue = initialValue;

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onSubmit(inputValue.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <form onSubmit={handleUpdate} className="space-y-3">
          <Input
          color="default"
          size="md"
            type="text"
            defaultValue={initialValue}
            onChange={(e) => (inputValue = e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end gap-2">
            <Button
              color="danger"
              size="md"
              type="button"
              onClick={onClose}
              className="transition"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              size="md"
              type="submit"
              className="transition"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
