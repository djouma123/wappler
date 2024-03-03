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
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "argmt_cash "
      },
      {
        "type": "text",
        "name": "argmt_cheque  "
      },
      {
        "type": "text",
        "name": "argno_doc "
      },
      {
        "type": "text",
        "name": "argbanque "
      },
      {
        "type": "text",
        "name": "argusermaj "
      },
      {
        "type": "text",
        "name": "argmvtpaye_tx"
      }
    ]
  },
  "EncaissementFature": {
    "query": [
      {
        "type": "text",
        "name": "sort"
      },
      {
        "type": "text",
        "name": "dir"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "argmt_cash"
      },
      {
        "type": "text",
        "name": "argmt_cheque"
      },
      {
        "type": "text",
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "argno_doc"
      },
      {
        "type": "text",
        "name": "argbanque"
      },
      {
        "type": "text",
        "name": "argusermaj"
      },
      {
        "type": "text",
        "name": "argmvtpaye_tx"
      }
    ],
    "sessionStorage": [
      {
        "type": "number",
        "name": "IdContrat"
      }
    ]
  },
  "Recherche": {
    "localStorage": [
      {
        "type": "text",
        "name": "Searchcreteria"
      }
    ],
    "global": [
      {
        "type": "text",
        "name": "creteria"
      }
    ],
    "searchCritique": {
      "meta": null,
      "outputType": "object"
    },
    "sessionStorage": [
      {
        "type": "number",
        "name": "IdContrat"
      }
    ],
    "data_view1": {
      "meta": [
        {
          "name": "CODE_TABLE",
          "type": "text"
        },
        {
          "name": "ID_LIGNE",
          "type": "number"
        },
        {
          "name": "LIB_COURT",
          "type": "text"
        },
        {
          "name": "LIB_LONG",
          "type": "text"
        },
        {
          "name": "NOM_TABLE",
          "type": "text"
        },
        {
          "name": "CODE_LIGNE",
          "type": "number"
        }
      ],
      "outputType": "array"
    }
  },
  "RecuReport": {
    "localStorage": [
      {
        "type": "text",
        "name": "id_contrat"
      },
      {
        "type": "text",
        "name": "argmt_cash"
      },
      {
        "type": "text",
        "name": "argmt_cheque"
      },
      {
        "type": "text",
        "name": "argno_doc"
      },
      {
        "type": "text",
        "name": "argbanque"
      },
      {
        "type": "text",
        "name": "argusermaj"
      },
      {
        "type": "text",
        "name": "argmvtpaye_tx"
      }
    ]
  }
});
