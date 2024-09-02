interface ISubmitButtonProps {
  isLoading: boolean;
  text: string;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({ isLoading, text }) => {
  return (
    <button
      type="submit"
      className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg flex items-center justify-center gap-4"
      disabled={isLoading}
    >
      {isLoading && <p>...</p>}
      {text}
    </button>
  );
};

export default SubmitButton;
