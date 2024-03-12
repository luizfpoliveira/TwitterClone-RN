import { View, Text } from "react-native";
import React from "react";

import { EvilIcons } from "@expo/vector-icons";

type iconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = ({ icon, text }: iconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={icon} size={22} color={"gray"} />
      <Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
    </View>
  );
};

export default IconButton;
