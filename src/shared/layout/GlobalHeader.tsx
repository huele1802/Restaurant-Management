import { Badge, Flex } from "antd"
import styles from "./GlobalHeader.module.scss"
import SearchInput from "@shared/components/SearchInput"
import avatar from "@/assets/images/User_cicrle.png"
import { useState } from "react"
import { MenuOutlined, QuestionCircleOutlined } from "@ant-design/icons"
import bell from "@assets/icons/Bell.svg"

const GlobalHeader: React.FC = () => {
    const [show] = useState(true)

    return (
        <Flex align="center" className="h-full">
            <Flex align="center" gap={33} className="flex-1">
                <h1 className="text-4xl leading-none text-[#0088FF]">
                    ShineWay
                </h1>
                <SearchInput />
            </Flex>
            <Flex gap="large" align="center">
                <Flex
                    align="center"
                    gap="small"
                    className={styles.accountContainer}
                >
                    <img src={avatar} height={64} width={64} />
                    <Flex
                        vertical
                        gap="small"
                        align="start"
                        justify="flex-start"
                    >
                        <p className={styles.name}>Nguyễn Văn A</p>
                        <span className={styles.role}>Admin</span>
                    </Flex>
                </Flex>
                <Flex gap="middle" align="center">
                    <QuestionCircleOutlined style={{ fontSize: 26 }} />
                    <Badge dot={show} offset={[-8, 8]}>
                        <img src={bell} height={32} width={32} />
                    </Badge>
                    <MenuOutlined style={{ fontSize: 24 }} />
                </Flex>
            </Flex>
        </Flex>
    )
}

export default GlobalHeader
