import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        margin-top: 32px;
        padding: 26px 0 8px;
        border-top: 1px solid #dcdcdc;

        .footerTop {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo {
            display: block;
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            object-fit: contain;
        }

        .copyright,
        .developed {
            margin: 0;
            color: #777777;
            font-size: 11px;
            line-height: 1.8;
        }

        .copyright {
            color: #444444;
            font-weight: 700;
        }

        .developed a {
            color: #111111;
            font-weight: 700;
            text-decoration: none;
        }

        .developed a:hover {
            text-decoration: underline;
        }

        .support {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-height: 38px;
            padding: 0 16px;
            border: 1px solid #111111;
            border-radius: 999px;
            background: #111111;
            color: #ffffff;
            font-size: 11px;
            font-weight: 700;
            text-decoration: none;
            transition:
                background 160ms ease,
                transform 160ms ease;
        }

        .support:hover {
            background: #333333;
            transform: translateY(-1px);
        }

        .support svg {
            font-size: 12px;
        }

        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }

        .footerLinks a {
            display: inline-flex;
            align-items: center;
            gap: 7px;
            min-height: 34px;
            padding: 0 11px;
            border: 1px solid #dddddd;
            border-radius: 8px;
            background: #ffffff;
            color: #555555;
            font-size: 10px;
            font-weight: 700;
            text-decoration: none;
            transition:
                border-color 150ms ease,
                color 150ms ease,
                background 150ms ease;
        }

        .footerLinks a:hover {
            border-color: #111111;
            background: #111111;
            color: #ffffff;
        }

        .footerLinks svg {
            flex-shrink: 0;
            font-size: 12px;
        }

        @media (max-width: 600px) {
            .footerTop {
                align-items: flex-start;
                flex-direction: column;
                gap: 16px;
            }

            .footerLinks {
                gap: 8px;
            }
        }
    `,
};
