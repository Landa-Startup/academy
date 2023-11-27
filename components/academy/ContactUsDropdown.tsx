const options = ['join us', 'courses', 'faqs', 'Counseling'];

export default function ContactUsDropdown({
  selectedOption,
  handleOptionChange
}: {
  selectedOption: any;
  handleOptionChange: any;
}) {
  return (
    <div>
      <select
        className="inline-flex h-[40px] w-[360px] items-center justify-start border border-yellow-400 bg-yellow-50 pl-5 capitalize md:h-[50px] md:w-[389px]"
        value={selectedOption}
        onChange={handleOptionChange}
        name="contactReason"
      >
        <option value="">select contact reason...</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
