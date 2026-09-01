import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;
        background: #f5f5f5;
        color: #111111;

        .page {
            width: min(1180px, calc(100% - 40px));
            margin: 0 auto;
            padding: 32px 0;
        }

        .hero {
            max-width: 750px;
            padding: 74px 0 48px;
        }

        .label {
            margin: 0;
            color: #707070;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.4px;
            text-transform: uppercase;
        }

        .title {
            max-width: 680px;
            margin: 14px 0 18px;
            font-family: "Antonio", "Arial Narrow", sans-serif;
            font-size: clamp(48px, 7vw, 82px);
            font-weight: 700;
            line-height: 0.98;
            letter-spacing: -1px;
        }

        .para {
            max-width: 650px;
            margin: 0;
            color: #666666;
            font-size: 16px;
            line-height: 1.75;
        }

        .generator {
            display: grid;
            grid-template-columns:
                minmax(0, 1.35fr)
                minmax(320px, 0.65fr);
            overflow: hidden;
            border: 1px solid #d8d8d8;
            border-radius: 22px;
            background: #ffffff;
            box-shadow: 0 18px 60px rgba(0, 0, 0, 0.06);
        }

        @media (max-width: 900px) {
            .generator {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 600px) {
            .page {
                width: min(100% - 24px, 1180px);
                padding: 18px 0;
            }

            .hero {
                padding: 52px 0 36px;
            }

            .title {
                margin-top: 12px;
                font-size: clamp(44px, 14vw, 62px);
            }

            .para {
                font-size: 14px;
                line-height: 1.7;
            }

            .generator {
                border-radius: 16px;
            }
        }
    `,
};
