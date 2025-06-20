import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import clsx from "clsx";
import Select from "react-select";
import { Button, Form, Row, Col } from "react-bootstrap";
import {
  TEXT,
  PASSWORD,
  BUTTON,
  SELECT,
  type IConfig,
  type IButton,
} from "shared";
import styles from "./_form.module.scss";

interface FormComponentProps {
  formConfig: IConfig;
  onSubmit: (data: any) => void;
  onChange: (data: Record<string, any>) => void;
  values?: Record<string, any>;
  options?: Record<string, any>;
  handlers?: Record<string, (e?: React.MouseEvent) => void>;
}

export const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { formConfig, values, onSubmit, onChange, options, handlers } = props;

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: values || {},
  });

  useEffect(() => {
    if (values) {
      Object.entries(values).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [values, setValue]);

  return (
    <div className={styles["form-container"]}>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row>
          {formConfig.fields.map((field: any, index: number) => {
            if ([TEXT, PASSWORD].includes(field.type)) {
              return (
                <Col
                  key={`form-${index + 9999}`}
                  md={field.size}
                  xs={12}
                  className="mb-3"
                >
                  <Form.Group controlId={field.name}>
                    <Form.Label>
                      {field.label}
                      {field?.required && (
                        <span className={styles["form-required"]}>*</span>
                      )}
                    </Form.Label>
                    <Form.Control
                      className="shadow-none"
                      type={field.type}
                      placeholder={field.placeholder}
                      disabled={field.disabled}
                      isInvalid={!!errors[field.name]}
                      {...register(field.name, {
                        ...field.validation,
                        onChange: (e) => {
                          const value = e.target.value;
                          setValue(field.name, value);
                          onChange({ [field.name]: value });
                        },
                      })}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors[field.name]?.message as string}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              );
            }

            if (field.type === SELECT) {
              return (
                <Col
                  key={`form-${index + 9999}`}
                  md={field.size}
                  xs={12}
                  className="mb-3"
                  style={field?.style || {}}
                >
                  <Form.Group controlId={field.name}>
                    <Form.Label>
                      {field.label}
                      {field?.required && (
                        <span className={styles["form-required"]}>*</span>
                      )}
                    </Form.Label>

                    <Controller
                      control={control}
                      name={field.name}
                      rules={field.validation}
                      render={({ field: { ref, onBlur } }) => (
                        <Select
                          ref={ref}
                          options={options?.[field.option] || []}
                          placeholder={field.placeholder}
                          isDisabled={field.disabled}
                          isMulti={field?.isMulti || false}
                          value={values?.[field.name] ?? null}
                          onChange={(selectedOption) => {
                            onChange({ [field.name]: selectedOption });
                            setValue(field.name, selectedOption);
                          }}
                          onBlur={onBlur}
                          classNamePrefix="react-select"
                          className={clsx({
                            "is-invalid": !!errors[field.name],
                          })}
                        />
                      )}
                    />

                    <Form.Control.Feedback type="invalid" className="d-block">
                      {errors[field.name]?.message as string}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              );
            }

            if (field.type === BUTTON) {
              return (
                <Col
                  key={`form-${index + 9999}`}
                  md={field.size}
                  xs={12}
                  className={clsx("mb-3", styles["form-btn-container"])}
                  style={field?.style || {}}
                >
                  {field.childs.map((child: IButton, childIndex: number) => {
                    if (child.type === "button") {
                      const onClickHandler = handlers?.[child.action];
                      return (
                        <Button
                          key={`form-button-${index}-${childIndex}`}
                          type="button"
                          disabled={child.disabled}
                          className="me-2"
                          style={child?.style || {}}
                          onClick={(event) => {
                            if (typeof onClickHandler === "function") {
                              onClickHandler(event);
                            }
                          }}
                        >
                          {child.label}
                        </Button>
                      );
                    }
                    return (
                      <Button
                        key={`form-button-${index}-${childIndex}`}
                        type="submit"
                        disabled={child.disabled}
                        className="me-2"
                        style={child?.style || {}}
                      >
                        {child.label}
                      </Button>
                    );
                  })}
                </Col>
              );
            }

            return null;
          })}
        </Row>
      </Form>
    </div>
  );
};
