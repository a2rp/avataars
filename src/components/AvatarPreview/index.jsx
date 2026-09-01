import parse from "html-react-parser";
import { Styled } from "./styled";

const AvatarPreview = ({ svg, seed, selectedStyleName }) => {
    return (
        <Styled.Wrapper>
            <div className="previewHeader">
                <div>
                    <p className="sectionLabel">Avatar Preview</p>

                    <h2 className="previewTitle">{selectedStyleName}</h2>
                </div>

                <span className="status">Generated</span>
            </div>

            <div className="avatarFrame">
                <div className="avatarBackground">
                    <div className="avatar">{svg ? parse(svg) : null}</div>
                </div>
            </div>

            <div className="previewFooter">
                <p className="seedText">Unique Seed</p>

                <p className="seedValue">{seed || "Generating..."}</p>
            </div>
        </Styled.Wrapper>
    );
};

export default AvatarPreview;
