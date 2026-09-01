import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding-bottom: 30px;
        border-bottom: 1px solid #dcdcdc;

        .brand {
            display: flex;
            align-items: center;
            gap: 14px;
            min-width: 0;
        }

        .logo {
            display: block;
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            object-fit: contain;
        }

        .brandInfo {
            min-width: 0;
        }

        .brandName {
            margin: 0;
            font-family: "Antonio", "Arial Narrow", sans-serif;
            font-size: 22px;
            font-weight: 700;
            line-height: 1.1;
        }

        .brandText {
            margin: 5px 0 0;
            color: #707070;
            font-size: 12px;
        }

        .styleBadge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 34px;
            padding: 0 14px;
            flex-shrink: 0;
            border: 1px solid #d5d5d5;
            border-radius: 999px;
            background: #ffffff;
            color: #555555;
            font-size: 12px;
            font-weight: 700;
            white-space: nowrap;
        }

        @media (max-width: 600px) {
            padding-bottom: 20px;

            .logo {
                width: 42px;
                height: 42px;
            }

            .brandName {
                font-size: 19px;
            }

            .brandText {
                display: none;
            }

            .styleBadge {
                min-height: 30px;
                padding: 0 10px;
                font-size: 10px;
            }
        }

        @media (max-width: 380px) {
            .styleBadge {
                display: none;
            }
        }
    `,
};
