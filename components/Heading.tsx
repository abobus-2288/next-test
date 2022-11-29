interface HeadingProps {
    text: string
    tag?: string
}

const Heading = (props: HeadingProps) => {
    const Tag: any = props.tag || 'h1';

    return (
        <Tag>
            {props.text}
        </Tag>
    )
}

export default Heading;