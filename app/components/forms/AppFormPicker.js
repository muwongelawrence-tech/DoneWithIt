import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from "./ErrorMessage";

export default function AppFormPicker({items, name, placeholder, PickerItemComponent,numberOfColumns}) {

    const { errors, setFieldValue,touched , values } = useFormikContext();
    return (
           <>
             <AppPicker
               items = {items}
               onSelectItem = {(item) => setFieldValue(name,item)}
               placeholder = {placeholder}
               selectedItem = {values[name]}
               PickerItemComponent = {PickerItemComponent}
               numberOfColumns = {numberOfColumns}

             />
             <ErrorMessage error = {errors[name]} visible= {touched[name]}/>
           </>

    );
}

const styles = StyleSheet.create({

});
