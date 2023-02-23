{
  "$schema": "https://developer.microsoft.com/json-schemas/sp/column-formatting.schema.json",
  "elmType": "div",
  "txtContent": "@currentField",
  "style": {
    "color": "=if(@currentField <= @now, 'red',if(@currentField <= @now + 7776000000 && @currentField > @now,'orange','green'))",
    "font-weight": "=if(@currentField <= @now, 'bold',if(@currentField <= @now + 7776000000 && @currentField > @now,'semi-bold','normal'))"
  }
}
