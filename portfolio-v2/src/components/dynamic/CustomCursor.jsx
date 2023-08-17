import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const CustomCursor = () => {
    return (
        <AnimatedCursor
            color="90,90, 90"
            innerSize={10}
            outerSize={35}
            innerScale={1.2}
            outerScale={2}
            outerStyle={{
                backgroundColor: "rgba(230,230,230,0.9)",
                mixBlendMode: 'exclusion'
            }}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'h1',
                'button',
                '.link',
                'nav'
            ]}
        />
    )
}

export default CustomCursor