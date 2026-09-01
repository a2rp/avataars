import {
    FaArrowRotateRight,
    FaCheck,
    FaCopy,
    FaDownload,
    FaShuffle,
} from "react-icons/fa6";
import { Styled } from "./styled";

const RANDOM_STYLE_ID = "random";

const AvatarControls = ({
    styles,
    selectedStyleId,
    onStyleChange,
    onGenerate,
    onDownload,
    onCopy,
}) => {
    const isRandomSelected = selectedStyleId === RANDOM_STYLE_ID;

    return (
        <Styled.Wrapper>
            <div className="controlHeader">
                <p className="sectionLabel">Customize</p>

                <p className="controlText">
                    Select an avatar style and generate a fresh variation.
                </p>
            </div>

            <div className="styleSection">
                <div className="styleSectionHeader">
                    <p className="fieldLabel">Avatar Style</p>

                    <span className="styleTotal">{styles.length}</span>
                </div>

                <div className="styleMenu">
                    <button
                        type="button"
                        className={`styleItem randomStyleItem ${
                            isRandomSelected ? "selected" : ""
                        }`}
                        onClick={() => onStyleChange(RANDOM_STYLE_ID)}
                    >
                        <span className="styleItemContent">
                            <FaShuffle />

                            <span className="styleItemText">Random Style</span>
                        </span>

                        {isRandomSelected && (
                            <span className="selectedIcon">
                                <FaCheck />
                            </span>
                        )}
                    </button>

                    <div className="styleDivider" />

                    {styles.map((item) => {
                        const isSelected = item.id === selectedStyleId;

                        return (
                            <button
                                key={item.id}
                                type="button"
                                className={`styleItem ${
                                    isSelected ? "selected" : ""
                                }`}
                                onClick={() => onStyleChange(item.id)}
                            >
                                <span className="styleItemText">
                                    {item.name}
                                </span>

                                {isSelected && (
                                    <span className="selectedIcon">
                                        <FaCheck />
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            <button
                type="button"
                className="button primaryButton"
                onClick={onGenerate}
            >
                {isRandomSelected ? <FaShuffle /> : <FaArrowRotateRight />}

                <span>
                    {isRandomSelected
                        ? "Generate Random Style"
                        : "Generate New Avatar"}
                </span>
            </button>

            <div className="divider">
                <span>Export</span>
            </div>

            <div className="actions">
                <button
                    type="button"
                    className="button secondaryButton"
                    onClick={onDownload}
                >
                    <FaDownload />

                    <span>Download PNG</span>
                </button>

                <button
                    type="button"
                    className="button secondaryButton"
                    onClick={onCopy}
                >
                    <FaCopy />

                    <span>Copy SVG</span>
                </button>
            </div>

            <div className="info">
                <p className="infoTitle">Ready for your projects</p>

                <p className="infoText">
                    PNG works well for profile images and social media. SVG is
                    ideal when you need a scalable graphic.
                </p>
            </div>
        </Styled.Wrapper>
    );
};

export default AvatarControls;
