import { ReactNode } from "react";
import { HeadContainer } from "./styles";

interface HeadCheckoutProps {
    title: string;
    subtitle: string;
    icon: ReactNode;
    iconColor: 'yellowDark' | 'purple';
}

export function HeadCheckout({ icon, subtitle, title, iconColor }: HeadCheckoutProps) {
    return (
        <HeadContainer iconColor={iconColor}>
            <div>
                {icon}
            </div>
            <div>
                <h1 
                style={{
                    fontFamily: 'Roboto',
                    fontWeight: 500,
                    fontSize: '1rem',
                }}
                >
                    {title}
                </h1>
                <p>
                    {subtitle}
                </p>
            </div>
        </HeadContainer>
    )
}