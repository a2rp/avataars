import { Styled } from "./styled";

const Header = ({ totalStyles }) => {
    return (
        <Styled.Wrapper>
            <div className="brand">
                <img
                    className="logo"
                    src={`${import.meta.env.BASE_URL}logo.png`}
                    alt="Ashish Ranjan"
                />

                <div className="brandInfo">
                    <p className="brandName">Random Avataars</p>

                    <p className="brandText">DiceBear Avatar Generator</p>
                </div>
            </div>

            <span className="styleBadge">{totalStyles} Styles</span>
        </Styled.Wrapper>
    );
};

export default Header;
