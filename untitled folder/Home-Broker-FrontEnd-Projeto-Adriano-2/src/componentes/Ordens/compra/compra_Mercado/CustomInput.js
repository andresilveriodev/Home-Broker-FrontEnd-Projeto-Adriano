import React, { useCallback, useEffect, useMemo } from "react";
import { NumericFormat } from 'react-number-format'; // Usando 'NumericFormat' do pacote 'react-number-format'
import { MDBIcon } from "mdbreact";
import { formatarNumero } from "./Formatacoes";
import usePrevious from "./usePrevious";

const CustomInput = ({
  precision = 2,
  type,
  placeholder = "",
  readOnly = false,
  step,
  className = "",
  onChange,
  value,
  autoSelect = false,
  onBlur = () => {},
  onKeyPress = () => {},
  containerClassName = "",
  allowNegative = false,
  name,
  renderArrows = true,
  theme = "light",
  suffix = "",
  suffixStyle = {},
  disabled = false,
}) => {
  let input;

  const handleChange = useMemo(() => {
    return readOnly ? () => {} : onChange;
  }, [onChange, readOnly]);

  const onUp = useCallback(
    (event) => {
      let valorAnterior = value;
      let resultado;

      if (["precoNegativo", "quantidade"].includes(type)) {
        valorAnterior = valorAnterior
          .toString()
          .split(".")
          .join("")
          .replace(",", ".");
      }

      resultado = Number(Number(valorAnterior) + Number(step));

      if (type === "preco" || type === "precoNegativo") {
        resultado = Number(resultado).toFixed(precision);
      }
      if (type === "precoNegativo") {
        resultado = resultado.toString().replace(".", ",");
      }
      handleChange(resultado, event);
    },
    [value, type, step, handleChange, precision]
  );

  const onDown = useCallback(
    (event) => {
      let valorAnterior = value;
      if (valorAnterior > 0 || allowNegative) {
        let resultado;

        if (["precoNegativo", "quantidade"].includes(type)) {
          valorAnterior = valorAnterior
            .toString()
            .split(".")
            .join("")
            .replace(",", ".");
        }

        resultado = Number(Number(valorAnterior) - step);
        if (type === "preco" || type === "precoNegativo") {
          resultado = resultado.toFixed(precision);
        }
        if (type === "precoNegativo") {
          resultado = resultado.toString().replace(".", ",");
        }
        handleChange(resultado, event);
      }
    },
    [allowNegative, handleChange, precision, step, type, value]
  );

  const previousStep = usePrevious(step);

  useEffect(() => {
    if (previousStep && previousStep !== step) {
      const newValue = validateValueOnPrecisionChange({
        previousStep,
        step,
        value,
      });

      handleChange(newValue);
    }
  }, [step, value, handleChange, previousStep]);

  const themeClass = useMemo(() => {
    return theme === "light" ? "" : "darkCustomInput";
  }, [theme]);

  const hasArrowClassName = useMemo(() => {
    return renderArrows ? "arrowsInput" : "";
  }, [renderArrows]);

  const hasSuffixClassName = useMemo(() => {
    return suffix ? "suffixInput" : "";
  }, [suffix]);

  if (type === "preco" || type === "precoNegativo") {
    input = (
      <NumericFormat
        disabled={disabled}
        placeholder={placeholder}
        className={`form-control textInput ${className} ${hasArrowClassName} ${hasSuffixClassName}`}
        thousandSeparator="."
        decimalSeparator=","
        value={value}
        onValueChange={(values) => handleChange(values.floatValue)}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        onFocus={(event) => {
          if (autoSelect) event.target.select();
        }}
        onKeyUp={(event) => {
          if (event.key === "ArrowUp") {
            onUp(event);
          } else if (event.key === "ArrowDown") {
            onDown(event);
          }
        }}
      />
    );
  } else if (type === "quantidade") {
    input = (
      <NumericFormat
        placeholder={placeholder}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={0}
        className={`form-control textInput ${hasArrowClassName} ${className} ${hasSuffixClassName}`}
        value={value}
        onValueChange={(values) => handleChange(values.floatValue)}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        onFocus={(event) => {
          if (autoSelect) event.target.select();
        }}
        onKeyUp={(event) => {
          if (event.key === "ArrowUp") {
            onUp(event);
          } else if (event.key === "ArrowDown") {
            onDown(event);
          }
        }}
      />
    );
  }

  return (
    <div className={`containerInput ${containerClassName} ${themeClass}`}>
      {!!suffix && (
        <span style={suffixStyle} className="suffix">
          {suffix}
        </span>
      )}
      {input}
      {readOnly || !renderArrows ? null : (
        <div className="divContainerBotoes">
          <div
            className="divRepetidor"
            onMouseDown={(event) => {
              event.preventDefault();
              onUp(event);
            }}
          >
            <MDBIcon icon="caret-up" className="divClicavel" />
          </div>
          <div
            className="divRepetidor"
            onMouseDown={(event) => {
              event.preventDefault();
              onDown(event);
            }}
          >
            <MDBIcon icon="caret-down" className="divClicavel" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomInput;

export const boxShadowInput = (classe) => {
  const activeElement = document.activeElement;

  if (!activeElement) {
    return "";
  }

  return activeElement.className.includes(classe) ? "inputFocado" : "";
};

const validateValueOnPrecisionChange = ({ previousStep, step, value }) => {
  let newValue = value;

  const [, fractionDigits] = step.toString().split(".");

  const precision = fractionDigits ? fractionDigits.length : 0;

  if (step < previousStep) {
    newValue = newValue * 1;
  } else {
    newValue = +Number(newValue).toFixed(precision);
  }
  return newValue;
};
