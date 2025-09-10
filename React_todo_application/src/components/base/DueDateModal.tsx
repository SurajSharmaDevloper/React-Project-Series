import { useEffect, useState } from "react";

interface DueDateModalProps {
  isOpen: boolean;
  initialDate?: string;
  onClose: () => void;
  onSubmit: (date: string) => void;
}

export default function DueDateModal({
  isOpen,
  initialDate,
  onClose,
  onSubmit,
}: DueDateModalProps) {
  const [date, setDate] = useState(initialDate || "");

  useEffect(() => {
    setDate(initialDate || "");
  }, [initialDate, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) return;
    onSubmit(date);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-lg font-semibold mb-4">Set Due Date</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
