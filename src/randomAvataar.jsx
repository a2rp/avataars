import { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";
import AvatarControls from "./components/AvatarControls";
import AvatarPreview from "./components/AvatarPreview";
import Footer from "./components/Footer";
import Header from "./components/Header";
import avataarStyles from "./avataarStyles";
import { Styled } from "./styled";

const RANDOM_STYLE_ID = "random";

const createAvatarData = (styleItem) => {
    const seed = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;

    const avatar = createAvatar(styleItem.style, {
        seed: [seed],
    });

    return {
        seed,
        svg: avatar.toString(),
        styleName: styleItem.name,
    };
};

const getRandomStyle = () => {
    const randomIndex = Math.floor(Math.random() * avataarStyles.length);

    return avataarStyles[randomIndex];
};

const RandomAvataars = () => {
    const [svg, setSvg] = useState("");
    const [seed, setSeed] = useState("");

    const [selectedStyleId, setSelectedStyleId] = useState(RANDOM_STYLE_ID);

    const [generatedStyleName, setGeneratedStyleName] = useState("");

    const generateAvatar = (styleItem) => {
        if (!styleItem) {
            return;
        }

        const avatarData = createAvatarData(styleItem);

        setSeed(avatarData.seed);
        setSvg(avatarData.svg);
        setGeneratedStyleName(avatarData.styleName);
    };

    const generateFromSelection = (styleId) => {
        if (styleId === RANDOM_STYLE_ID) {
            generateAvatar(getRandomStyle());
            return;
        }

        const selectedStyle = avataarStyles.find((item) => item.id === styleId);

        generateAvatar(selectedStyle);
    };

    useEffect(() => {
        if (selectedStyleId === RANDOM_STYLE_ID) {
            const randomStyle = getRandomStyle();
            const avatarData = createAvatarData(randomStyle);

            setSeed(avatarData.seed);
            setSvg(avatarData.svg);
            setGeneratedStyleName(avatarData.styleName);

            return;
        }

        const selectedStyle = avataarStyles.find(
            (item) => item.id === selectedStyleId,
        );

        if (!selectedStyle) {
            return;
        }

        const avatarData = createAvatarData(selectedStyle);

        setSeed(avatarData.seed);
        setSvg(avatarData.svg);
        setGeneratedStyleName(avatarData.styleName);
    }, [selectedStyleId]);

    const generateAvataar = () => {
        generateFromSelection(selectedStyleId);
    };

    const downloadAvataar = () => {
        if (!svg) {
            toast.error("Generate an avatar first.");
            return;
        }

        const svgBlob = new Blob([svg], {
            type: "image/svg+xml;charset=utf-8",
        });

        const objectUrl = URL.createObjectURL(svgBlob);
        const image = new Image();

        image.onload = () => {
            const canvas = document.createElement("canvas");

            canvas.width = 1024;
            canvas.height = 1024;

            const context = canvas.getContext("2d");

            if (!context) {
                URL.revokeObjectURL(objectUrl);

                toast.error("Unable to prepare the image.");

                return;
            }

            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            URL.revokeObjectURL(objectUrl);

            const pngUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");

            link.download = `random-avatar-${Date.now()}.png`;
            link.href = pngUrl;

            document.body.appendChild(link);
            link.click();
            link.remove();

            toast.success("PNG downloaded.");
        };

        image.onerror = () => {
            URL.revokeObjectURL(objectUrl);

            toast.error("Unable to download the avatar.");
        };

        image.src = objectUrl;
    };

    const copySvg = () => {
        if (!svg) {
            toast.error("Generate an avatar first.");
            return;
        }

        const copied = copy(svg);

        if (copied) {
            toast.success("SVG copied to clipboard.");

            return;
        }

        toast.error("Unable to copy SVG.");
    };

    return (
        <Styled.Wrapper>
            <main className="page">
                <Header totalStyles={avataarStyles.length} />

                <section className="hero">
                    <p className="label">Random Avatar Generator</p>

                    <h1 className="title">Create your next avatar.</h1>

                    <p className="para">
                        Generate unique DiceBear avatars instantly. Pick a
                        style, create a new variation, download it as PNG, or
                        copy the SVG source.
                    </p>
                </section>

                <section className="generator">
                    <AvatarPreview
                        svg={svg}
                        seed={seed}
                        selectedStyleName={
                            generatedStyleName || "Random Avatar"
                        }
                    />

                    <AvatarControls
                        styles={avataarStyles}
                        selectedStyleId={selectedStyleId}
                        onStyleChange={setSelectedStyleId}
                        onGenerate={generateAvataar}
                        onDownload={downloadAvataar}
                        onCopy={copySvg}
                    />
                </section>

                <Footer />
            </main>
        </Styled.Wrapper>
    );
};

export default RandomAvataars;
