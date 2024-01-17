dmx.config({
  "index": {
    "var2": {
      "meta": null,
      "outputType": "text"
    },
    "repeat1": {
      "meta": null,
      "outputType": "text"
    },
    "iterator1": {
      "meta": null,
      "outputType": "text"
    },
    "tableRepeat2": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "text",
          "name": "trid"
        },
        {
          "type": "text",
          "name": "trdate"
        },
        {
          "type": "text",
          "name": "libelle_type_mvt"
        },
        {
          "type": "text",
          "name": "num_contrat"
        },
        {
          "type": "text",
          "name": "nro_lettrage"
        },
        {
          "type": "number",
          "name": "credit"
        },
        {
          "type": "number",
          "name": "debit"
        },
        {
          "type": "text",
          "name": "ltype"
        },
        {
          "type": "text",
          "name": "type_mvt"
        },
        {
          "type": "number",
          "name": "ligneno"
        },
        {
          "type": "number",
          "name": "echu"
        },
        {
          "type": "number",
          "name": "echeance"
        },
        {
          "type": "number",
          "name": "echu_filter"
        },
        {
          "type": "text",
          "name": "date_lettrage"
        },
        {
          "type": "text",
          "name": "montant_tva"
        }
      ],
      "outputType": "array"
    },
    "var3": {
      "meta": null,
      "outputType": "number"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "tmp_MvtId"
      },
      {
        "type": "text",
        "name": "Nro_lettrage"
      },
      {
        "type": "text",
        "name": "totalAmount"
      },
      {
        "type": "text",
        "name": "id_contrat"
      }
    ],
    "sessionStorage": [
      {
        "type": "text",
        "name": "sessionVar"
      }
    ],
    "var4": {
      "meta": null,
      "outputType": "text"
    },
    "var5": {
      "outputType": "number"
    },
    "global": [
      {
        "type": "text",
        "name": "tetGlobal"
      }
    ],
    "VarListFactures": {
      "meta": null,
      "outputType": "object"
    }
  },
  "facture": {
    "query": [
      {
        "type": "text",
        "name": "new"
      }
    ]
  },
  "recu": {
    "dateVar": {
      "meta": null,
      "outputType": "text"
    },
    "localStorage": [
      {
        "type": "text",
        "name": "tmp_MvtId"
      },
      {
        "type": "text",
        "name": "Nro_lettrage"
      },
      {
        "type": "text",
        "name": "totalAmount"
      },
      {
        "type": "text",
        "name": "id_contrat"
      }
    ]
  }
});
