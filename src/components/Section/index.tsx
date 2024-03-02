import './Section.css'

interface SectionProps {
    title?: string
    subTitle?: string
    accentColor?: string
    childrenTop?: React.ReactNode
    childrenBottom?: React.ReactNode
}

export function Section({ title, subTitle, accentColor, childrenTop, childrenBottom }: SectionProps) {
    const accentStyle = accentColor ? { borderTop: accentColor, borderBottom: accentColor } : {}

    return (
        <div className="section-container" style={accentStyle}>
            {title && (
                <div className="section-header">
                    <h2 className="section-title">{title}</h2>
                    <h3 className="section-subtitle">{subTitle}</h3>
                </div>
            )}
            {childrenTop && (
                <div className="section-inner">
                    {childrenTop}
                </div>
            )}
            {childrenBottom && (
                <div className="section-inner">
                    {childrenBottom}
                </div>
            )}
        </div>
    )
}