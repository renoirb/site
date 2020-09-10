let labelledById = 0

/**
 * Hash-Map of ARIA attribute for the
 * component that may or may not have an HTML
 * node to use as label
 */
export interface ILabelee {
  'aria-labelled-by'?: string
}

export interface ILabel {
  id: string
  textContent?: string
}

export interface ILabeler {
  id: string
  hasLabel: boolean
  labelee: ILabelee
  label: ILabel
}

export class Labeler implements ILabeler {
  id: string

  readonly label: ILabel

  constructor(textContent: '' | string = '') {
    let id = textContent.toLocaleLowerCase().replace(/[\s\t\n]/g, '_')
    id += '__' + String(++labelledById)
    this.id = id
    const label = {
      id: this.id,
    } as ILabel
    if (textContent !== '') {
      Object.assign(label, { textContent })
    }
    this.label = label
    Object.freeze(this)
  }

  get hasLabel(): boolean {
    return this.label.textContent !== ''
  }

  get labelee(): ILabelee {
    const out = {} as ILabelee
    if (this.hasLabel) {
      Object.assign(out, { 'aria-labelled-by': this.id })
    }
    return out
  }
}
