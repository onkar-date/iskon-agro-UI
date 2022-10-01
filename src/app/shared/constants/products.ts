import { IProduct } from './../interface/product.interface';
export const PRODUCT_TYPES = {
  ALL: 'All Products',
  LIQUID_FERTILIZER: 'Liquid Fertilizer',
  WATER_SOLUBLE: 'Water Soluble Fertilizer',
};
export const PRODUCTS: IProduct[] = [
  // P101
  {
    id: 'P101',
    name: 'CropFeed Urea Ammonium Nitrate N 32%',
    category: PRODUCT_TYPES.LIQUID_FERTILIZER,
    description:
      'A special Chemical liquid Fertilizer, which contains all forms of Nitrogen. It corrects the deficiency of Nitrogen  apparent in plant quickly and effectively. Nitrogen promotes rapid growth while improving the ability of plants to resist stress.',
    specification: {
      byPercent: [
        {
          name: 'Total Nitrogen - N (Urea, Ammonical and Nitrate',
          value: '32 (Min)',
        },
        {
          name: 'Urea Nitrogen (NH2)',
          value: '16.5 (Max)',
        },
        {
          name: 'Ammonium Nitrogen (NH4)',
          value: '7.5 (Min)',
        },
        {
          name: 'Nitrate Nitrogen (No3)',
          value: '7.5 (Min)',
        },
        {
          name: 'Specific Gravity (at 150C)',
          value: '130-135',
        },
      ],
      byWeight: [],
    },
    advantages: [
      'N32 provides prolonged nutrition of plants with nitrogen, allows to adjust the nutrition in the key phases of plant growing, increase the missing factors in development and obtain the necessary characteristics of protein.',
      'High application efficiency in all climatic zones, including "dry" be highly absorbable through',
    ],
    forBestResults: [
      'Dose range between 1% and 2%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Ltr', '500 ml'],
    images: {
      large: 'P101',
      small: 'P101_small'
    }
  },
  // P102
  {
    id: 'P102',
    name: 'CropFeed DAP Liquid 18:46:00',
    category: PRODUCT_TYPES.LIQUID_FERTILIZER,
    description:
      'Cropfeed Dap Liquid Fertilizer it is Imported 100% Water Soluble Mixture of Fertilizer. It Contains Nitrogen and Phosphorous in pure and free form, which facilitates plant for quick absorption of these nutrients. It also contains Trace Elements, which are very beneficial for growth of plant. Cropfeed DAP Liquid fertilizer improves quality of Fruits, Vegetables and Yield of crops. Low pH make unique to this product and hence, suitable for all types of soil at any temperature.',
    specification: {
      byWeight: [
        {
          name: 'Total Nitrogen',
          value: '18 (Min)',
        },
        {
          name: 'Total Phosphorous (as P205)',
          value: '46 (Min)',
        },
        {
          name: 'pH (5% Solution)',
          value: '1.5- 2.5',
        },
      ],
      byPercent: [],
    },
    advantages: [],
    forBestResults: [],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Ltr', '500 ml'],
    images: {
      large: 'P102',
      small: 'P102'
    }
  },
  // P103
  {
    id: 'P103',
    name: 'CropFeed High K Liquid 00:00:40',
    category: PRODUCT_TYPES.LIQUID_FERTILIZER,
    description:
      'Cropfeed Potash (K20 40%} liquid Fertilizer is Imported 100% water Soluble mixture of fertilizer. It contains Kin Pure form with neutral ph, which make this special Fertilizer be highly absorbable through leaves. This Unique Fertilizer is very effective to correct any K deficiency in Plant. It enhances the fruiting growth very efficiently in any plant.',
    specification: {
      byWeight: [
        {
          name: 'Potash (K2O)',
          value: '40%',
        },
        {
          name: 'Density (gr/cm3) 200C',
          value: '1.40-1.45',
        },
        {
          name: 'Ph (1%)',
          value: '6.5-7.5',
        },
      ],
      byPercent: [],
    },
    advantages: [],
    forBestResults: [],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Ltr', '500 ml'],
    images: {
      large: 'P103',
      small: 'P103'
    }
  },
  // P104
  {
    id: 'P104',
    name: 'CropFeed Ammonium Poly-Phosphate 10:34:00',
    category: PRODUCT_TYPES.LIQUID_FERTILIZER,
    description:
      'It is a special Liquid Fertilizer, which is rich in Nitrogen and Phosphorous nutrient with very high absorption rate. It is completely soluble in water and producing a strong acidic solution. Its acidic reaction supports absorption of Nitrogen and Phosphorous. It prevents scaling and logging in soil. Cropfeed Ammonium Poly-Phosphate is a good starter to enable the root growths and seeds germination. This Fertilizer is designed to remove the stress on plants during all stages of growth.',
    specification: {
      byWeight: [
        {
          name: 'Specific gravity (at 27 Degree C)',
          value: '1.2-1.6',
        },
        {
          name: 'pH (5% Solution)',
          value: '5.8-6.2',
        },
      ],
      byPercent: [
        {
          name: 'Total Nitrogen (All as Ammonical 10 Nitrogen)',
          value: '10',
        },
        {
          name: 'Total Phosphorous (as P205)',
          value: '34',
        },
        {
          name: 'Poly Phosphorous (as P205)',
          value: '22',
        },
      ],
    },
    advantages: [],
    forBestResults: [],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Ltr', '500 ml'],
    images: {
      large: 'P104',
      small: 'P104'
    }
  },
  // P105
  {
    id: 'P105',
    name: 'CropFeed Mono Potassium Phosphate 00:52:34',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      'Cropfeed Mono Potassium Phosphate 00:52:34 the product is free-flowing fine crystalline multi nutrient fertilizer, which is 100% water soluble fertilizer, Its consist of 100% plant nutrients, highly concentrated source of phosphorus for plants (52% P2O5) and free chloride sodium and other detrimental elements of plants. Its highly efficient source of phosphorus and Potassium of plants and an ideal material for foliar spraying for a wide range of crops.',
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Water Soluble Soluble phosphorous (as P2O5)',
          value: '52 (Min)',
        },
        {
          name: 'Water Soluble Potassium as(as K2O)',
          value: '34 (Min)',
        },
        {
          name: 'Sodium (as NaCl)',
          value: '0.5 (Max)',
        },
        {
          name: 'Moisture',
          value: '0.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Consists of 100% plant nutrients',
      'Highly concentrated source of phosphorus for plants (52% P205)',
      'Free of chloride, sodium and other detrimental elements of plants',
      'A highly efficient source of phosphorus and Potassium of plants',
      'An ideal material for foliar spraying for a wide range of crops',
    ],
    forBestResults: [
      'Dose range between 0.5% and 1%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'Peak in generally compatible with pesticides and fertilizers. However, determine the compatibility with a jar test before mixing the product',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P105',
      small: 'P105_small'
    }
  },
  // P106
  {
    id: 'P106',
    name: 'CropFeed Mono Ammonium Phosphate 12:61:00',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      'CropFeed Mono Ammonium Phosphate 12:61:00 NPK 12:61:00, Imported 100% Water Soluble Fertilizer and recommended to use for drip fertigation or foliar spray. It contains a higher percentage of Phosphorus in available form. It has urea free nitrogen hence it can give better availability of Nitrogen through ammonia form. Its consist of 100% plant nutrients and highly concentrated source of phosphorus for plants (61% P2O5). Its highly efficient source of Nitrogen and Phosphorus of plant. Suitable for foliar spraying for a wide range of crops.',
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Water Soluble Soluble phosphorous (as P2O5)',
          value: '61 (Min)',
        },
        {
          name: 'Ammoniacal Nitrogen (N-NH4)',
          value: '12 (Min)',
        },
        {
          name: 'Total Nitrogen (N)',
          value: '12 (Min)',
        },
        {
          name: 'Sodium (as NaCl)',
          value: '0.5 (Max)',
        },
        {
          name: 'Matter insoluble in water',
          value: '0.5 (Max)',
        },
        {
          name: 'Moisture',
          value: '0.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Consists of 100% plant nutrients',
      'Highly concentrated source of phosphorus for plants (61% P205)',
      'Free of chloride, sodium and other detrimental elements of plants',
      'A highly efficient source of phosphorus and Potassium of plants',
      'Suitable for foliar applications',
    ],
    forBestResults: [
      'Dose range between 0.5% and 1%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'Select MAP is generally compatible with pesticides and fertilizers. However, determine the compatibility with a jar test before mixing the product',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P106',
      small: 'P106_small'
    }
  },
  // P107
  {
    id: 'P107',
    name: 'CropFeed Potassium Nitrate 13:00:45',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      "Cropfeed Potassium Nitrate 13:00:45 , Select NOP consists of two essential primary plant nutrients viz: Nitrogen and Potassium which are synergistic to each other. The presence of nitrate (13%) in select NOP enables the plant to minimize its uptake of chloride, whenever this damaging anion is present in the soil solution or in the irrigation water. This makes select NOP a necessity for chloride-sensitive crops. The presence of potassium (45%) enables plants to develop disease resistance, drought resistance, winter hardiness and longer storage life of produce. It's efficiently absorbed by plants and easy to apply with no Nitrogen losses to the atmosphere",
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Water soluble potassium (as K20)',
          value: '45 (Min)',
        },
        {
          name: 'Total Nitrogen (all in nitrate form)',
          value: '13 (Min)',
        },
        {
          name: 'Nitrate Nitrogen(N-NO3)',
          value: '13 (Min)',
        },

        {
          name: 'Sodium (as Na)',
          value: '1 (Max)',
        },
        {
          name: 'Total chloride (as Cl)',
          value: '1.5 (Max)',
        },
        {
          name: 'Matter insoluble in water',
          value: '0.5 (Max)',
        },
        {
          name: 'Moisture',
          value: '0.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Consists of 100% plant macronutrients',
      'Free of chloride, sodium and other detrimental elements of plants',
      'Easy to apply with no Nitrogen losses to the atmosphere',
    ],
    forBestResults: [
      'Dose range between 1% and 2%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'Select NOP is generally compatible with pesticides and fertilizers. However, determine the compatibility with a jar test before mixing the products',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P107',
      small: 'P107_small'
    }
  },
  // P108
  {
    id: 'P108',
    name: 'CropFeed NPK 19:19:19',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      'Cropfeed NPK 19:19:19 the product is free-flowing, fine crystalline multi nutrient fertilizer, which is fully soluble in water. It supplies essential macro nutrients (N.P.K) together to crops. It contains nitrogen in different forms needed gradually at different growth stage of crops, and soil nutrients such as Nitrogen, Phosphorus and Potassium in equal proportion. It is useful especially for healthy vegetative growth of plants. It is an excellent balanced nutrient source for Vegetable, Fruit Tree, Field Crops, Flowers, Turf and Gardening. It helps in improving reproductive and vegetative activities in the plant system.',
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Total Nitrogen',
          value: '19.00 (Min)',
        },
        {
          name: 'Water soluble Phosphate (as P2O5)',
          value: '19.00 (Min)',
        },
        {
          name: 'Water soluble potash (as K2O)',
          value: '19.00 (Min)',
        },
        {
          name: 'Total chloride (as Cl) on dry basis',
          value: '1.50 (Max)',
        },
        {
          name: 'Arsenic (as as)',
          value: '0.01 (Max)',
        },
        {
          name: 'Lead (as pb)',
          value: '0.003 (Max)',
        },
        {
          name: 'cadmium (as cd)',
          value: '0.0025 (Max)',
        },
        {
          name: 'Sodium as NaCl on dry basis',
          value: '0.5 (Max)',
        },
        {
          name: 'Matter insoluble in water',
          value: '0.5 (Max)',
        },
        {
          name: 'Moisture',
          value: '0.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Consists of 100% plant macronutrients',
      'Free of chloride, sodium and other detrimental elements of plants',
      'Provide balanced and complete plant nutrition',
      'Helps in vegetative growth, branching and flowering.',
      'Contains the balance ratio of NPK.',
      'Corrects deficiencies of nutrients.',
    ],
    forBestResults: [
      'Dose range between 1% and 2%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'CropFeed - BALANCE is generally compatible with pesticides and fertilizers. However determine the compatibility with a jar test before mixing the product.',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P108',
      small: 'P108_small'
    }
  },
  // P109
  {
    id: 'P109',
    name: 'CropFeed N.P.K 13:40:13',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      'Cropfeed N.P.K 13:40:13 the product is free-flowing, multi nutrient fertilizer, which is fully soluble in water. It supplies essential macro nutrients (N.P.K) together to crops. Made of high quality of ingredients, consists of 100% plant nutrients. Virtually free of chloride, sodium and other detrimental elements of plants. Provide balanced and complete plant nutrition which helps in vegetative growth, branching, and flowering. Its better absorption of other essential plant nutrients.',
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Water soluble phosphorous (as P2O5)',
          value: '40 (Min)',
        },
        {
          name: 'Total Nitrogen',
          value: '13 (Min)',
        },
        {
          name: 'Water soluble potassium (as K2O)',
          value: '13 (Min)',
        },
        {
          name: 'Sodium as NaCl',
          value: '0.5 (Max)',
        },
        {
          name: 'Matter Insoluble',
          value: '0.5 (Max)',
        },
        {
          name: 'Total chloride (as Cl) on dry basis',
          value: '1.5 (Max)',
        },
        {
          name: 'Lead (as pb)',
          value: '0.003 (Max)',
        },
        {
          name: 'Cadmium (as cd)',
          value: '0.0025 (Max)',
        },
        {
          name: 'Arsenic (as as)',
          value: '0.01 (Max)',
        },
        {
          name: 'Moisture',
          value: '0.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Made of high quality ingredients',
      'Consists of 100% plant macronutrients',
      'Virtually free of chloride, sodium and other detrimental elements of plants.',
      'Provide balanced and complete plant nutrition',
      'Helps in vegetative growth, branching and flowering.',
      'Helps in root growth and better absorption of other essential plant nutrients.',
      'Corrects deficiencies of nutrients.',
    ],
    forBestResults: [
      'Dose range between 1% and 2%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'Cropfeed - NPK 13-40-13 is generally compatible with pesticides and fertilizers. However determine the compatibility with a jar test before mixing the product',
      'Use FertiflowTM 13-40-13 in the rooting of all crops, for better results, it can also be used during establishment stage of the crops',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P109',
      small: 'P109_small'
    }
  },
  // P110
  {
    id: 'P110',
    name: 'Cropfeed Potassium Sulphate 00:00:50',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      'Cropfeed Potassium Sulphate 00:00:50 the product is free-flowing, fine crystalline multi nutrient fertilizer which is fully soluble in water. It contains sulphur which helps to improve shelf life of fruits. It is useful for development of fruit size, increases weight, sugar, colour formation and maintaining quality of fruit in all type of crops.',
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Water soluble potassium (as K2O)',
          value: '50 (Min)',
        },
        {
          name: 'Sulphatesulphur (as S)',
          value: '17.5 (Min)',
        },
        {
          name: 'Sodium as NaCl',
          value: '2 (Max)',
        },
        {
          name: 'Total chloride (as Cl)',
          value: '2.5 (Max)',
        },
        {
          name: 'Moisture',
          value: '1.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Made of high quality ingredients',
      'Consists of 100% plant nutrients.',
      'Virtually free of chloride, sodium and other detrimental elements of plants.',
      'Provide balanced and complete plant nutrition',
      'Helps in vegetative growth, branching and flowering.',
      'Contains the balance ratio of NPK.',
      'Corrects deficiencies of nutrients.',
    ],
    forBestResults: [
      'Dose range between 1% and 2%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'CropFeed - BALANCE is generally compatible with pesticides and fertilizers. However determine the compatibility with a jar test before mixing the product.',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P110',
      small: 'P110_small'
    }
  },
  // P111
  {
    id: 'P111',
    name: 'CropFeed Calcium Nitrate 15.5:0:0 + 18.5 Ca',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      'Cropfeed Calcium Nitrate 15.5:0:0 + 18.5 Ca the product is a dense granular fertilizer which is fully soluble in water. It improves cell wall of plant cell which leads to better quality, shelf life of marketable produce. It helps plant to enhance tolerance against diseases and insect infection due to increased cells strength. It prevent cracking, rotting in fruit / vegetables and other crops. It contains Nitrogen in Nitrate from a preferred sources for most of fruits and field crops. It provide available Calcium along with nitrogen rapidly.',
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Water soluble calcium (as ca)',
          value: '18.5 (Min)',
        },
        {
          name: 'Total nitrogen (Ammoniacal and Nitrate From)',
          value: '15.5 (Min)',
        },
        {
          name: 'Nitrate Nitrogen as N',
          value: '14.5 (Max)',
        },
        {
          name: 'Matter insoluble in water',
          value: '1.5 (Max)',
        },
        {
          name: 'Moisture',
          value: '0.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Made of high quality ingredients',
      'Consists of 100% plant nutrients.',
      'Virtually free of chloride, sodium and other detrimental elements of plants.',
      'Provide balanced and complete plant nutrition',
      'Helps in vegetative growth, branching and flowering.',
      'Contains the balance ratio of NPK.',
      'Corrects deficiencies of nutrients.',
    ],
    forBestResults: [
      'Dose range between 1% and 2%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'CropFeed - BALANCE is generally compatible with pesticides and fertilizers. However determine the compatibility with a jar test before mixing the product.',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P111',
      small: 'P111_small'
    }
  },
  // P112
  {
    id: 'P112',
    name: 'CropFeed Boronated Calcium Nitrate Ca 17.0% N 14.5% B 0.2-0.3%',
    category: PRODUCT_TYPES.WATER_SOLUBLE,
    description:
      'Crop feed Broron Calcium Nitrate Ca 17.0% N 14.5% B 0.2-0.3% supplies the soil nutrients such Calcium Nitrate in different proportion. Useful for all crops as a foliar spray, it helps in improving reproductive and vegetative activities in the plant system. Calcium nitrate fertilisers produce better fruits and vegetables. The calcium helps strengthen cell walls and the nitrate nitrogen is the sources preferred by fruits and vegetables and is readily available to plants.',
    specification: {
      byWeight: [],
      byPercent: [
        {
          name: 'Water soluble Calcium',
          value: '17 (Min)',
        },
        {
          name: 'Total Nitrogen( Ammonical + Nitrate)',
          value: '14.5 (Min)',
        },
        {
          name: 'Total Nitrogen - N',
          value: '13.5 (Min)',
        },
        {
          name: 'Boron',
          value: '0.2-0.3 (Max)',
        },
        {
          name: 'Moisture',
          value: '0.5 (Max)',
        },
      ],
    },
    advantages: [
      'Fully water soluble',
      'Made of high quality ingredients',
      'Consists of 100% plant nutrients.',
      'Virtually free of chloride, sodium and other detrimental elements of plants.',
      'Provide balanced and complete plant nutrition',
      'Helps in vegetative growth, branching and flowering.',
      'Contains the balance ratio of NPK.',
      'Corrects deficiencies of nutrients.',
    ],
    forBestResults: [
      'Dose range between 1% and 2%',
      'Spray in the early morning or late afternoon',
      'Avoid spraying plants that are under stress',
      'Use spray at medium volume and try to avoid run-off',
      'CropFeed - BALANCE is generally compatible with pesticides and fertilizers. However determine the compatibility with a jar test before mixing the product.',
    ],
    doses: [
      {
        name: 'Foliar Application',
        suggestion: '5 gm per liter of water',
      },
      {
        name: 'Drip Fertigation',
        suggestion: 'As per crop stage',
      },
    ],
    availablePackaging: ['1 Kg', '5 Kg', '10 Kg', '25 Kg'],
    images: {
      large: 'P112',
      small: 'P112_small'
    }
  },
];
