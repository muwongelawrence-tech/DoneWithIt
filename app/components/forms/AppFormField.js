import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

export default function AppFormField({name , ...otherProps}) {
    const {handleChange ,setFieldValue, values ,errors, setFieldTouched, touched} = useFormikContext();
    return (
         <>

            <AppTextInput
               onBlur = {() => setFieldTouched(name)}
               onChangeText = { handleChange(name)}
               
                 {...otherProps}
            />
                        
          <ErrorMessage error = {errors[name]} visible = {touched[name]}/>

         </>
    );
}

const styles = StyleSheet.create({

});
