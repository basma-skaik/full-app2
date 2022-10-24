import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import RadioForm from "react-native-simple-radio-button";

function RadioButtun() {
  const [chosenOption, setChosenOption] = useState(); //will store our current user options
  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ]; //create our options for radio group
  return (
    <View>
      {/* <Text> {chosenOption}</Text> */}
      <RadioForm
        style={styles.redioBtn}
        radio_props={options}
        initial={-1} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
          // console.log(value);
        }} //if the user changes options, set the new value
      />
    </View>
  );
}

export default RadioButtun;

const styles = StyleSheet.create({
  redioBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 150,
    paddingVertical: 10,
  },
});
