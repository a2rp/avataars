import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 30px;
        background: #fafafa;

        .sectionLabel {
            margin: 0;
            color: #707070;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.4px;
            text-transform: uppercase;
        }

        .controlHeader {
            margin-bottom: 24px;
        }

        .controlText {
            margin: 8px 0 0;
            color: #686868;
            font-size: 14px;
            line-height: 1.6;
        }

        .styleSection {
            margin-bottom: 18px;
        }

        .styleSectionHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
        }

        .fieldLabel {
            margin: 0;
            color: #222222;
            font-size: 13px;
            font-weight: 700;
        }

        .styleTotal {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 26px;
            height: 24px;
            padding: 0 7px;
            border-radius: 999px;
            background: #e9e9e9;
            color: #555555;
            font-size: 10px;
            font-weight: 700;
        }

        .styleMenu {
            height: 220px;
            padding: 6px;
            overflow-y: auto;
            overscroll-behavior: contain;
            border: 1px solid #d2d2d2;
            border-radius: 12px;
            background: #ffffff;
            scrollbar-color: #b5b5b5 transparent;
            scrollbar-width: thin;
        }

        .styleMenu::-webkit-scrollbar {
            width: 7px;
        }

        .styleMenu::-webkit-scrollbar-track {
            background: transparent;
        }

        .styleMenu::-webkit-scrollbar-thumb {
            border: 2px solid #ffffff;
            border-radius: 999px;
            background: #b5b5b5;
        }

        .styleItem {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            width: 100%;
            min-height: 42px;
            padding: 9px 11px;
            border: 0;
            border-radius: 8px;
            background: transparent;
            color: #444444;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 12px;
            text-align: left;
            cursor: pointer;
            transition:
                background 150ms ease,
                color 150ms ease;
        }

        .styleItem + .styleItem {
            margin-top: 2px;
        }

        .styleItem:hover {
            background: #f1f1f1;
            color: #111111;
        }

        .styleItem.selected {
            background: #111111;
            color: #ffffff;
            font-weight: 700;
        }

        .styleItem:focus-visible {
            outline: 2px solid #111111;
            outline-offset: 1px;
        }

        .styleItemContent {
            display: flex;
            align-items: center;
            gap: 9px;
            min-width: 0;
        }

        .styleItemContent svg {
            flex-shrink: 0;
            font-size: 12px;
        }

        .styleItemText {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .randomStyleItem {
            font-weight: 700;
        }

        .styleDivider {
            height: 1px;
            margin: 6px 5px;
            background: #e5e5e5;
        }

        .selectedIcon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            border-radius: 50%;
            background: #ffffff;
            color: #111111;
            font-size: 9px;
        }

        .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            width: 100%;
            min-height: 50px;
            padding: 12px 16px;
            border: 1px solid transparent;
            border-radius: 10px;
            font-family: Verdana, Geneva, sans-serif;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            transition:
                transform 160ms ease,
                background 160ms ease,
                border-color 160ms ease;
        }

        .button:hover {
            transform: translateY(-1px);
        }

        .button:active {
            transform: translateY(0);
        }

        .button:focus-visible {
            outline: 3px solid rgba(0, 0, 0, 0.18);
            outline-offset: 2px;
        }

        .primaryButton {
            border-color: #111111;
            background: #111111;
            color: #ffffff;
        }

        .primaryButton:hover {
            background: #333333;
        }

        .secondaryButton {
            border-color: #cccccc;
            background: #ffffff;
            color: #111111;
        }

        .secondaryButton:hover {
            border-color: #999999;
            background: #f2f2f2;
        }

        .divider {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 27px 0 18px;
            color: #888888;
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .divider::before,
        .divider::after {
            content: "";
            flex: 1;
            height: 1px;
            background: #dddddd;
        }

        .actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }

        .info {
            margin-top: 28px;
            padding: 18px;
            border: 1px solid #dddddd;
            border-radius: 12px;
            background: #ffffff;
        }

        .infoTitle {
            margin: 0 0 8px;
            color: #222222;
            font-size: 13px;
            font-weight: 700;
        }

        .infoText {
            margin: 0;
            color: #727272;
            font-size: 12px;
            line-height: 1.65;
        }

        @media (max-width: 600px) {
            padding: 20px;

            .styleMenu {
                height: 220px;
            }

            .actions {
                grid-template-columns: 1fr;
            }
        }
    `,
};
