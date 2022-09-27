import { IProduct } from './../interface/product.interface';
export const PRODUCTS: IProduct[] = [
  // P101
  {
    id: 'P101',
    name: 'CropFeed Urea Ammonium Nitrate N 32%',
    category: 'Liquid Fertilizer',
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
  },
  // P102
  {
    id: 'P102',
    name: 'CropFeed DAP Liquid 18:46:00',
    category: 'Liquid Fertilizer',
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
  },
  // P103
  {
    id: 'P103',
    name: 'CropFeed High K Liquid 00:00:40',
    category: 'Liquid Fertilizer',
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
  },
  // P104
  {
    id: 'P104',
    name: 'CropFeed Ammonium Poly-Phosphate 10:34:00',
    category: 'Liquid Fertilizer',
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
  },
  // P105
  {
    id: 'P105',
    name: 'CropFeed Mono Potassium Phosphate 00:52:34',
    category: 'Water Soluble Fertilizer',
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
  },
  // P106
  {
    id: 'P106',
    name: 'CropFeed Mono Ammonium Phosphate 12:61:00',
    category: 'Water Soluble Fertilizer',
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
  },
  // P107
  {
    id: 'P107',
    name: 'CropFeed Potassium Nitrate 13:00:45',
    category: 'Water Soluble Fertilizer',
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
  },
];