import { Empty, Typography } from "antd"

interface Props {
    message: string;
}

export const EmptyDataTable = ({ message}: Props) => {
    return (
        <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
            description={
                <Typography.Text>
                    {message}
                </Typography.Text>
            }
        >
        </Empty>
    );
}