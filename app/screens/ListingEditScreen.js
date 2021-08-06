import React, { useState }  from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { AppFormField, AppForm, AppFormPicker,SubmitButton } from '../components/forms';
import * as Yup from "yup";
import Screen from './Screen';
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import { saveListing } from '../api/fakeListings';

import useApi from '../../hooks/useApi';
import useLocation from '../../hooks/useLocation';

import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1,"Please select atleast one Image")
});

const categories = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];

export default function ListingEditScreen() {
     //const location = useLocation();
     const [uploadVisible ,setUploadVisible] = useState(false);

     const[progress,setProgress] = useState(0);

     //const { request:loadListings , data : listings, loading, error } = useApi();

     const handleSubmit = listing => {
         const newListing = { 
           ...listing,
           image2 : require("../assets/ml.jpg"),
           name : "Muwonge Lawrence",
          };
        setProgress(0);

        setUploadVisible(true);

        setProgress(1);

        saveListing(newListing);

        setUploadVisible(false);

        alert("Success");
     };

    return (
        <Screen >
           
           <ScrollView style = {styles.container}
             showsVerticalScrollIndicator = {false}
             showsHorizontalScrollIndicator = {false}
           >
             {/* <UploadScreen progress = {progress} visible = { uploadVisible }/> */}

              <AppForm
                initialValues = {{
                        title: "",
                        price:"",
                        description :"",
                        category: null,
                        images: []

                    }}
                onSubmit = { (values,{ resetForm }) => {
                  handleSubmit(values);
                  resetForm();
                } }
                validationSchema = { validationSchema }
              >
                <FormImagePicker name = "images"/>

                  <AppFormField
                  maxLength = {255}
                  name = "title"
                  placeholder = "Title"
                  />

                <AppFormField
                  maxLength = {8}
                  name = "price"
                  placeholder = "Price"
                  keyboardType = "numeric"
                  />

                  <AppFormPicker
                    items = {categories}
                    name = "category"
                    placeholder = "Category"
                    numberOfColumns = {3}
                    PickerItemComponent = { CategoryPickerItem }
                  />

                  <AppFormField
                  maxLength = {255}
                  multline
                  name = "description"
                  placeholder = "Description"
                  numberOfLines = {3}
                  />

                  <SubmitButton title = "Post"/> 

              </AppForm>
            </ScrollView>

        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        flex:1
    }
});
