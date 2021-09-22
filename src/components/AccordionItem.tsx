import * as React from 'react';
import { findDOMNode } from 'react-dom';

export interface ItemProps {
    index: number;
    title: React.ReactNode;
    children?: React.ReactNode;
    activeTab: number;
    activateItem(index: number): void;
}

export const AccordionItem: React.FunctionComponent<Readonly<ItemProps>> = (props: Readonly<ItemProps>) => {
    const ref = React.useRef(null);
    const [height, setHeight] = React.useState(0);
    const [active, setActive] = React.useState(false);
    const {title, children } = props;
    const isActive = active;
    const innerStyle = {
        height: `${isActive ? height : 0}px`
    };

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            const el = findDOMNode(ref.current) as HTMLDivElement;
            const newHeight = el?.querySelector('.item-body')?.scrollHeight;

            setHeight(newHeight || height);
        },  200);

        return () => {
            clearTimeout(timeout);
        };
    });

    return (
        <div className="item" role="tab" aria-expanded={isActive} ref={ref}>
            <button
                role="tab"
                className="item-head"
                onClick={() => {
                    setActive(!active);
                }}
            >
                {title}
            </button>

            <div style={innerStyle} className="item-body" aria-hidden={!isActive}>
                <div className="item-content">{children}</div>
            </div>
        </div>
    );
};

export default AccordionItem;