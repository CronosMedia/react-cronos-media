import { useRef } from "react";

const AccordionItem = ({ faq, active, onToggle }) => {
	const { question, answer } = faq;

	const contEl = useRef();
	return (
		<li className={`accordion_item ${active ? "active" : ""}`}>
			<button className="accordion-button" onClick={onToggle}>
				{question}
				<span className="control">{active ? "—" : "+"} </span>
			</button>
			<div
				ref={contEl}
				className="answer_wrapper"
				style={
					active
						? { height: contEl.current.scrollHeight }
						: { height: "0px" }
				}>
				<div className="answer">{answer}</div>
			</div>
		</li>
	);
};

export default AccordionItem;
