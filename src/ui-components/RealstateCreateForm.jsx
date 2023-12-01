/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createRealstate } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function RealstateCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    description: "",
    type: "",
    streetAddress: "",
    city: "",
    country: "",
    zipcode: "",
    price: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    images: [],
  };
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [type, setType] = React.useState(initialValues.type);
  const [streetAddress, setStreetAddress] = React.useState(
    initialValues.streetAddress
  );
  const [city, setCity] = React.useState(initialValues.city);
  const [country, setCountry] = React.useState(initialValues.country);
  const [zipcode, setZipcode] = React.useState(initialValues.zipcode);
  const [price, setPrice] = React.useState(initialValues.price);
  const [area, setArea] = React.useState(initialValues.area);
  const [bedrooms, setBedrooms] = React.useState(initialValues.bedrooms);
  const [bathrooms, setBathrooms] = React.useState(initialValues.bathrooms);
  const [images, setImages] = React.useState(initialValues.images);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDescription(initialValues.description);
    setType(initialValues.type);
    setStreetAddress(initialValues.streetAddress);
    setCity(initialValues.city);
    setCountry(initialValues.country);
    setZipcode(initialValues.zipcode);
    setPrice(initialValues.price);
    setArea(initialValues.area);
    setBedrooms(initialValues.bedrooms);
    setBathrooms(initialValues.bathrooms);
    setImages(initialValues.images);
    setCurrentImagesValue("");
    setErrors({});
  };
  const [currentImagesValue, setCurrentImagesValue] = React.useState("");
  const imagesRef = React.createRef();
  const validations = {
    description: [],
    type: [{ type: "Required" }],
    streetAddress: [],
    city: [{ type: "Required" }],
    country: [{ type: "Required" }],
    zipcode: [],
    price: [{ type: "Required" }],
    area: [],
    bedrooms: [{ type: "Required" }],
    bathrooms: [{ type: "Required" }],
    images: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          description,
          type,
          streetAddress,
          city,
          country,
          zipcode,
          price,
          area,
          bedrooms,
          bathrooms,
          images,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createRealstate.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RealstateCreateForm")}
      {...rest}
    >
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description: value,
              type,
              streetAddress,
              city,
              country,
              zipcode,
              price,
              area,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              type: value,
              streetAddress,
              city,
              country,
              zipcode,
              price,
              area,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Street address"
        isRequired={false}
        isReadOnly={false}
        value={streetAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress: value,
              city,
              country,
              zipcode,
              price,
              area,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.streetAddress ?? value;
          }
          if (errors.streetAddress?.hasError) {
            runValidationTasks("streetAddress", value);
          }
          setStreetAddress(value);
        }}
        onBlur={() => runValidationTasks("streetAddress", streetAddress)}
        errorMessage={errors.streetAddress?.errorMessage}
        hasError={errors.streetAddress?.hasError}
        {...getOverrideProps(overrides, "streetAddress")}
      ></TextField>
      <TextField
        label="City"
        isRequired={true}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city: value,
              country,
              zipcode,
              price,
              area,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={true}
        isReadOnly={false}
        value={country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city,
              country: value,
              zipcode,
              price,
              area,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.country ?? value;
          }
          if (errors.country?.hasError) {
            runValidationTasks("country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("country", country)}
        errorMessage={errors.country?.errorMessage}
        hasError={errors.country?.hasError}
        {...getOverrideProps(overrides, "country")}
      ></TextField>
      <TextField
        label="Zipcode"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={zipcode}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city,
              country,
              zipcode: value,
              price,
              area,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.zipcode ?? value;
          }
          if (errors.zipcode?.hasError) {
            runValidationTasks("zipcode", value);
          }
          setZipcode(value);
        }}
        onBlur={() => runValidationTasks("zipcode", zipcode)}
        errorMessage={errors.zipcode?.errorMessage}
        hasError={errors.zipcode?.hasError}
        {...getOverrideProps(overrides, "zipcode")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city,
              country,
              zipcode,
              price: value,
              area,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={area}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city,
              country,
              zipcode,
              price,
              area: value,
              bedrooms,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.area ?? value;
          }
          if (errors.area?.hasError) {
            runValidationTasks("area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("area", area)}
        errorMessage={errors.area?.errorMessage}
        hasError={errors.area?.hasError}
        {...getOverrideProps(overrides, "area")}
      ></TextField>
      <TextField
        label="Bedrooms"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={bedrooms}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city,
              country,
              zipcode,
              price,
              area,
              bedrooms: value,
              bathrooms,
              images,
            };
            const result = onChange(modelFields);
            value = result?.bedrooms ?? value;
          }
          if (errors.bedrooms?.hasError) {
            runValidationTasks("bedrooms", value);
          }
          setBedrooms(value);
        }}
        onBlur={() => runValidationTasks("bedrooms", bedrooms)}
        errorMessage={errors.bedrooms?.errorMessage}
        hasError={errors.bedrooms?.hasError}
        {...getOverrideProps(overrides, "bedrooms")}
      ></TextField>
      <TextField
        label="Bathrooms"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={bathrooms}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city,
              country,
              zipcode,
              price,
              area,
              bedrooms,
              bathrooms: value,
              images,
            };
            const result = onChange(modelFields);
            value = result?.bathrooms ?? value;
          }
          if (errors.bathrooms?.hasError) {
            runValidationTasks("bathrooms", value);
          }
          setBathrooms(value);
        }}
        onBlur={() => runValidationTasks("bathrooms", bathrooms)}
        errorMessage={errors.bathrooms?.errorMessage}
        hasError={errors.bathrooms?.hasError}
        {...getOverrideProps(overrides, "bathrooms")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              description,
              type,
              streetAddress,
              city,
              country,
              zipcode,
              price,
              area,
              bedrooms,
              bathrooms,
              images: values,
            };
            const result = onChange(modelFields);
            values = result?.images ?? values;
          }
          setImages(values);
          setCurrentImagesValue("");
        }}
        currentFieldValue={currentImagesValue}
        label={"Images"}
        items={images}
        hasError={errors?.images?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("images", currentImagesValue)
        }
        errorMessage={errors?.images?.errorMessage}
        setFieldValue={setCurrentImagesValue}
        inputFieldRef={imagesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Images"
          isRequired={true}
          isReadOnly={false}
          value={currentImagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.images?.hasError) {
              runValidationTasks("images", value);
            }
            setCurrentImagesValue(value);
          }}
          onBlur={() => runValidationTasks("images", currentImagesValue)}
          errorMessage={errors.images?.errorMessage}
          hasError={errors.images?.hasError}
          ref={imagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "images")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
