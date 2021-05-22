import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import {Ionicons} from '@expo/vector-icons';

export const SignIn: React.FC = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [stayConected, setStayConected] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  return (
    <View style={styles.contentBase}>
      <View style={styles.contentCenter}>

        <Text style={styles.title}>Fazer login</Text>

        <View style={styles.form}>
          <View style={styles.emailWrapper}>
            <Ionicons style={styles.emailIcon} name='person' size={25} color='red'/>
            <TextInput
              placeholder="Email"
              onChangeText={setEmail}
              style={styles.emailInput}
            />
          </View>
          <View style={styles.passwordWrapper}>
            <Ionicons style={styles.passwordIconStart} name='key' size={25} color='red'/>
            <TextInput
              placeholder="Password"
              onChangeText={setPassword}
              secureTextEntry={hidePassword}
              style={styles.passwordInput}
            />
            <Ionicons style={styles.passwordIconEnd} name={hidePassword? 'eye-off' : 'eye'} size={25} color='red'
                      onPress={() => setHidePassword(!hidePassword)}/>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox 
              color='red'
              value={stayConected}
              onValueChange={setStayConected}
            />
            <Text>Manter conectado</Text>
          </View>

          <TouchableOpacity 
            style={{
              //...styles.signInButton,
              padding: 15,
              marginTop: 15,
              borderRadius: 4,
              backgroundColor: (password.length < 3 || email.length < 3) ? '#ff000050' : 'red',
            }} 
            disabled={password.length < 3 || email.length < 3}
          >
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  emailIcon: {
    marginLeft: 10,
    marginRight: -35,
  },
  emailInput: {
    borderColor: 'red',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    paddingLeft: 45,
  },
  passwordWrapper: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  passwordIconStart: {
    marginLeft: 10,
    marginRight: -35,
  },
  passwordIconEnd: {
    marginLeft: -35,
    marginRight: 10,
  },
  passwordInput: {
    borderColor: 'red',
    borderRadius: 4,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    paddingLeft: 45,
    paddingRight: 45,
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
