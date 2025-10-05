import { Input } from "antd"
import React from "react"
import userIcon from "@assets/icons/Search_alt.svg"
import styles from "./SearchInput.module.css"

type InputSize = "small" | "middle" | "large"

interface SearchInputProps {
    placeholder?: string
    size?: InputSize
    iconSize?: number
}

const SearchInput: React.FC<SearchInputProps> = ({
    placeholder,
    size,
    iconSize,
}) => {
    return (
        <Input
            size={size || "middle"}
            className={styles.search}
            placeholder={placeholder}
            prefix={
                <img
                    src={userIcon}
                    width={iconSize || 32}
                    height={iconSize || 32}
                />
            }
        />
    )
}

export default SearchInput
