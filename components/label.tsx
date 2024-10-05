export default function Label(
  props: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
) {
  return (
    <label
      {...props}
      className={`text-gray-700 dark:text-gray-300 ${props.className}`}
    ></label>
  );
}
