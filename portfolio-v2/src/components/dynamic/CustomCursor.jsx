import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
    ssr: false
});

const CustomCursor = () => {
    return (
        <AnimatedCursor
            color="235,77, 77"
            innerSize={10}
            outerSize={35}
            innerScale={1.5}
            outerScale={0}
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
                'button',
                '.link',
                'nav'
            ]}
        />
    )
}

export default CustomCursor