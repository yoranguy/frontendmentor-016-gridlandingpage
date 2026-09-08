export interface FooterProps {
    footer: string[];
}

const Footer = (footerLines: FooterProps) => {
    return (
        <>
            <footer className="flex flex-col p-[30px] text-nav">
                {footerLines.footer.map((text: string, index: number) => (
                    <p key={index}>{text}</p>
                ))}
            </footer>
        </>
    );
};

export default Footer;
