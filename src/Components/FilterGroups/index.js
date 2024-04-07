import {Component} from 'react'
import { MdKeyboardArrowUp,MdOutlineKeyboardArrowDown } from "react-icons/md";
import './index.css'


class FilterGroups extends Component {
    state = {idealForIsOpen: false,
        occasionIsOpen: false,
        workIsOpen: false,
        fabricIsOpen: false,
        segmentIsOpen: false,
        suitableForIsOpen: false,
        rawMaterialIsOpen: false,
        patternIsOpen: false,
        idealFor: 'ALL',
        occasion: 'ALL',
        work: 'ALL',
        fabric: 'ALL',
        segment: 'ALL',
        suitableFor: 'ALL',
        rawMaterial: 'ALL',
        pattern: 'ALL',
    }

    onClickIdealFor =  () => {
        this.setState(prevState => ({
          idealForIsOpen: !prevState.idealForIsOpen 
        }));
      };

      onClickOccasion = () => {
        this.setState(prevState => ({
          occasionIsOpen: !prevState.occasionIsOpen 
        }));
      };

      onClickWork = () => {
        this.setState(prevState => ({
          workIsOpen: !prevState.workIsOpen 
        }));
      };
      onClickFabric =  () => {
        this.setState(prevState => ({
          fabricIsOpen: !prevState.fabricIsOpen
        }));
      };

      onClickSegment = () => {
        this.setState(prevState => ({
          segmentIsOpen: !prevState.segmentIsOpen
        }));
      };

      onClickSuitableFor = () => {
        this.setState(prevState => ({
          suitableForIsOpen: !prevState.suitableForIsOpen
        }));
      };
      onClickRawmaterial = () => {
        this.setState(prevState => ({
          rawMaterialIsOpen: !prevState.rawMaterialIsOpen
        }));
      };

      onClickPattern = () => {
        this.setState(prevState => ({
          patternIsOpen: !prevState.patternIsOpen
        }));
      };

    render(){
        const {
            idealFor,
            occasion,
            work,
            fabric,
            segment,
            suitableFor,
            rawMaterial,
            pattern,
            idealForIsOpen,
            occasionIsOpen,
            workIsOpen,
            fabricIsOpen,
            segmentIsOpen,
            suitableForIsOpen,
            rawMaterialIsOpen,
            patternIsOpen
          } = this.state;
        return(
            <div className='filterGroupsContainer'>
                <div className='customazableContainer '>
                    <input type='checkbox' id = 'customizabel' />
                    <label htmlFor='customizabel'>CUSTOMIZABLE</label>
                </div>
                <hr/>
                <div className='idealFor eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>IDEAL FOR</h2>
                            <h3>{idealFor}</h3>
                        </div>
                    {idealForIsOpen ? 
                        <button type = 'button' onClick = {this.onClickIdealFor} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickIdealFor} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {idealForIsOpen && <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'men' />
                        <label htmlFor = 'men'>MEN</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'women' />
                        <label htmlFor = 'women'>WOMEN</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'babyAndKids' />
                        <label htmlFor = 'babyAndKids'>BABY & KIDS</label>
                        </div>
                    </div>}
                </div>
                <hr/>
                <div className='occasion eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>OCCASION</h2>
                            <h3>{occasion}</h3>
                        </div>
                    {occasionIsOpen ? 
                        <button type = 'button' onClick = {this.onClickOccasion} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickOccasion} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {occasionIsOpen && <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'casual' />
                        <label htmlFor = 'casual'>CASUAL</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'formal' />
                        <label htmlFor = 'formal'>FORMAL</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'party' />
                        <label htmlFor = 'party'>PARTY</label>
                        </div>
                    </div>}
                </div>
                <hr/>
                <div className='work eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>WORK</h2>
                            <h3>{work}</h3>
                        </div>
                    {workIsOpen ? 
                        <button type = 'button' onClick = {this.onClickWork} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickWork} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {workIsOpen && <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'office' />
                        <label htmlFor = 'office'>OFFICE</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'outdoor' />
                        <label htmlFor = 'outdoor'>OUTDOOR</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'home' />
                        <label htmlFor = 'home'>HOME</label>
                        </div>
                    </div>}
                </div>
                <hr/>
                <div className='fabric eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>FABRIC</h2>
                            <h3>{fabric}</h3>
                        </div>
                    {fabricIsOpen ? 
                        <button type = 'button' onClick = {this.onClickFabric} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickFabric} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {fabricIsOpen && <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'cotton' />
                        <label htmlFor = 'cotton'>COTTON</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'polyester' />
                        <label htmlFor = 'polyester'>POLYESTER</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'silk' />
                        <label htmlFor = 'silk'>SILK</label>
                        </div>
                    </div>}
                </div>
                <hr/>
                <div className='segment eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>SEGMENT</h2>
                            <h3>{segment}</h3>
                        </div>
                    {segmentIsOpen ? 
                        <button type = 'button' onClick = {this.onClickSegment} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickSegment} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {segmentIsOpen&& <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'premium' />
                        <label htmlFor = 'premium'>PREMIUM</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'midrange' />
                        <label htmlFor = 'midrange'>MID-RANGE</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'budget' />
                        <label htmlFor = 'budget'>BUDGET</label>
                        </div>
                    </div>}
                </div>
                <hr/>
                <div className='suitableFor eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>SUITABLE FOR</h2>
                            <h3>{suitableFor}</h3>
                        </div>
                    {suitableForIsOpen ? 
                        <button type = 'button' onClick = {this.onClickSuitableFor} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickSuitableFor} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {suitableForIsOpen && <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'slimfit' />
                        <label htmlFor = 'slimfit'>SLIM FIT</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'regularfit' />
                        <label htmlFor = 'regularfit'>REGULAR FIT</label>
                        </div>
                    </div>}
                </div>
                <hr/>
                <div className='rawMaterial eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>RAW MATERIAL</h2>
                            <h3>{rawMaterial}</h3>
                        </div>
                    {rawMaterialIsOpen ? 
                        <button type = 'button' onClick = {this.onClickRawmaterial} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickRawmaterial} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {rawMaterialIsOpen && <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'wool' />
                        <label htmlFor = 'wool'>WOOL</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'leather' />
                        <label htmlFor = 'leather'>LEATHER</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'denim' />
                        <label htmlFor = 'denim'>DENIM</label>
                        </div>
                    </div>}
                </div>
                <hr/>
                <div className='pattern eachContainer'>
                    <div className='eachCategorySection'>
                        <div className='sectiontop'>
                            <h2>PATTERN</h2>
                            <h3>{pattern}</h3>
                        </div>
                    {patternIsOpen ? 
                        <button type = 'button' onClick = {this.onClickPattern} className='arrow'><MdKeyboardArrowUp/> </button>:
                        <button type = 'button' onClick = {this.onClickPattern} className='arrow'><MdOutlineKeyboardArrowDown  /></button>
                    }
                    </div>
                    {patternIsOpen && <div className='optionsForEachCategory'>
                        <button type = 'button' className='unSelectButton'>Unselect all</button>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'solid' />
                        <label htmlFor = 'solid'>SOLID</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'stripped' />
                        <label htmlFor = 'stripped'>STRIPPED</label>
                        </div>
                        <div className='eachOption'>
                        <input type='checkbox' id = 'printed' />
                        <label htmlFor = 'printed'>PRINTED</label>
                        </div>
                    </div>}
                </div>
                <hr/>
            </div>
        )
    }
}

export default FilterGroups