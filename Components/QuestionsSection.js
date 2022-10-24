import { StyleSheet, Text, View } from "react-native";
import RadioButtun from "./RadioButtun";
import InputField from "./InputField";
import Button from "./Button";

function QuestionsSection() {
  return (
    <View style={styles.radioButtonSection}>
      <Text style={styles.topText}>
        Fill out this symptom form so that the doctor can help you faster
      </Text>
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>Are you the patient?</Text>
      </View>
      <RadioButtun />
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>Do you have a headache?</Text>
      </View>
      <RadioButtun />
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>Do you have a stomachache?</Text>
      </View>
      <RadioButtun />
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>Are you dizzy?</Text>
      </View>
      <RadioButtun />
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>How old is the patient?</Text>
      </View>
      <InputField />
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>
          What other symptoms do you have?
        </Text>
      </View>
      <InputField />
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>Do you have any comments?</Text>
      </View>
      <InputField />
      <View style={{ alignItems: "center" }}>
        <Button title={"Check"} />
      </View>
    </View>
  );
}

export default QuestionsSection;

const styles = StyleSheet.create({
  radioButtonSection: {
    paddingHorizontal: 46,
  },
  topText: {
    fontSize: 15,
    paddingTop: 28,
  },
  questionText: {
    fontSize: 15,
    paddingTop: 10,
  },
});
