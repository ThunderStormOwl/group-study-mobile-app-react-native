import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import {Ionicons} from '@expo/vector-icons';

export const SignIn: React.FC = () => {
  return (
    <View style={styles.contentBase}>
      <View style={styles.contentCenter}>

        <Text style={styles.title}>Fazer login</Text>

        <View style={styles.form}>
          <View style={styles.emailWrapper}>
            <Ionicons name='person' size={24} color='black'/>
            <TextInput
              placeholder="Email"
              style={styles.emailInput}
            />
          </View>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.emailPassword}
          />

          <View style={styles.checkboxContainer}>
            <Checkbox />
            <Text>Manter conectado</Text>
          </View>

          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signButtonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.haveNoAccount}>Não tem uma conta ainda?</Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentBase: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentCenter: {
    width: '80%'
  },
  subTitle: {
    fontWeight: '300',
    fontSize: 22,
  },
  title: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 36,
  },
  form: {
    marginTop: 15,
  },
  emailWrapper: {
    flexDirection: 'row',
  },
  emailInput: {
    borderColor: 'red',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 50,
  },
  emailPassword: {
    borderColor: 'red',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  signButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  signInButton: {
    padding: 15,
    marginTop: 15,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  haveNoAccount: {
    marginTop: 20,
    textAlign: 'center',
  },
  signUpButtonText: {
    color: 'red',
    textAlign: 'center',
  },
  signUpButton: {
    padding: 15,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'red',
  }
});
