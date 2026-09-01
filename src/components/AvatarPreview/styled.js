import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        min-width: 0;
        padding: 30px;
        border-right: 1px solid #dddddd;

        .previewHeader {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 24px;
        }

        .sectionLabel {
            margin: 0;
            color: #707070;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.4px;
            text-transform: uppercase;
        }

        .previewTitle {
            margin: 7px 0 0;
            font-family: "Antonio", "Arial Narrow", sans-serif;
            font-size: 26px;
            font-weight: 700;
        }

        .status {
            display: inline-flex;
            align-items: center;
            min-height: 30px;
            padding: 0 12px;
            border-radius: 999px;
            background: #eeeeee;
            color: #333333;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.7px;
            text-transform: uppercase;
        }

        .avatarFrame {
            padding: 18px;
            border: 1px solid #dddddd;
            border-radius: 18px;
            background:
                linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.035) 1px,
                    transparent 1px
                ),
                linear-gradient(rgba(0, 0, 0, 0.035) 1px, transparent 1px);
            background-size: 24px 24px;
        }

        .avatarBackground {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 490px;
            padding: 40px;
            border-radius: 14px;
            background: #f7f7f7;
        }

        .avatar {
            width: min(100%, 420px);
            aspect-ratio: 1;
        }

        .avatar svg {
            display: block;
            width: 100% !important;
            height: 100% !important;
        }

        .previewFooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            margin-top: 20px;
        }

        .seedText {
            margin: 0;
            color: #777777;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.8px;
            text-transform: uppercase;
        }

        .seedValue {
            max-width: 65%;
            margin: 0;
            overflow: hidden;
            color: #555555;
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        @media (max-width: 900px) {
            border-right: 0;
            border-bottom: 1px solid #dddddd;

            .avatarBackground {
                min-height: 420px;
            }
        }

        @media (max-width: 600px) {
            padding: 20px;

            .avatarFrame {
                padding: 10px;
                border-radius: 14px;
            }

            .avatarBackground {
                min-height: 310px;
                padding: 20px;
                border-radius: 10px;
            }

            .previewFooter {
                align-items: flex-start;
                flex-direction: column;
                gap: 6px;
            }

            .seedValue {
                max-width: 100%;
            }
        }

        @media (max-width: 380px) {
            .previewHeader {
                flex-direction: column;
            }
        }
    `,
};
