import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { TEXT, PASSWORD, BUTTON } from "shared/constants";
import type { IButton } from "shared/model/button.model";
import styles from "./_form.module.scss";

type IField = {
  name?: string;
  label?: string;
  type: string;
  validation?: {};
  placeholder?: string;
  disabled?: boolean;
  size: number;
  required?: boolean;
  childs?: IButton[];
};

export type IConfig = {
  fields: IField[];
};

interface FormComponentProps {
  formConfig: IConfig;
  onSubmit: (data: any) => void;
  onChange: (data: Record<string, any>) => void;
  values?: Record<string, any>;
}

export const FormComponent: React.FC<FormComponentProps> = (props) => {
  const { formConfig, values, onSubmit, onChange } = props;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
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

            if (field.type === BUTTON) {
              return (
                <Col
                  key={`form-${index + 9999}`}
                  md={field.size}
                  xs={12}
                  className={clsx("mb-3", styles["form-btn-container"])}
                  style={field?.style || {}}
                >
                  {field.childs.map((child: IButton, childIndex: number) => (
                    <Button
                      key={`form-button-${index}-${childIndex}`}
                      type={child.type}
                      disabled={child.disabled}
                      className="me-2"
                      style={child?.style || {}}
                    >
                      {child.label}
                    </Button>
                  ))}
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
