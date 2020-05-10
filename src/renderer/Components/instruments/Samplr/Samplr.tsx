import * as React from "react";
import { SamplrStyles } from "./SamplrStyles";
import { IPad, Sample, SampleBank } from "./types";
import PadBank from "./PadBank";
import FileBrowserButton from "./FileBrowserButton";
import Button from "./Button";
import { Flex } from "../../Layout";
import { Sampler, Synth } from "tone";

const Samplr: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [sampleBank, setSampleBank] = React.useState<SampleBank>({});
  const [selectedPad, setSelectedPad] = React.useState<IPad>();

  /**
   *  we need to maintain the sample instance on our sampler so we initiate a ref and
   * then set the .current to a new Sampler() upon loading our first sample.
   * this isnt the ideal way but until a better solution is found, it works.
   */
  let sampler = React.useRef<Sampler | undefined>();

  const loadSample = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    if (selectedPad && e.target.files) {
      //TODO check that this will not overwrite existing sample
      const file = URL.createObjectURL(e.target.files[0]);
      //create sample objecct for lookup samplebank
      const sample: Sample = {
        //regex turns C://home/folder/dev/image.jpg to just 'image.jpg'
        name: e.target.value.split(/(\\|\/)/g).pop() as string,
        midiTrigger: selectedPad.midiNote,
        noteTrigger: selectedPad.note,
      };
      const { note, id: padID } = selectedPad;
      /**
       * If a sampler is not set the sampler ref to a Tone Sampler instance
       * initiate the Sampler with a sample lookup using the selected pads midi note
       * and the file from the user.
       * once the dataurl is loaded we set the components loading state to false
       *
       * we use the pad's id as the table loop up so when the pad is touched we can
       * check if there is an associated sample and then play that sample by using the midinote
       *
       * If the sampler ref already exists we add() the sample to the sampler and
       * again set the loading state to false in the callback
       */
      if (!sampler.current) {
        console.log("//CREATING SAMPLER AND SETTING FIRST SAMPLE");

        sampler.current = new Sampler({ [note]: file }, function () {
          //set the current selected sample to the new sample
          setLoading(false);
        }).toMaster();
        setSampleBank({ ...sampleBank, [padID]: sample });
      } else {
        //if there is a sampler add the new sample to the bank
        sampler.current.add(selectedPad.note, file, function () {
          setSampleBank({ ...sampleBank, [padID]: sample });
          setLoading(false);
        });
      }
    }

    setLoading(false);

    //!TODO: checking for selected pad on sample load is bad ux. the default pad should be pad 01
  };

  const handleSamplePlay = (pad: IPad) => {
    if (sampleBank[pad.id] && sampler.current) {
      sampler.current.triggerRelease(sampleBank[pad.id].noteTrigger);
      sampler.current.triggerAttack(sampleBank[pad.id].noteTrigger);
    }
    //if we have a sampler, a sample loaded to that pad and are currently not loading. Play the sound
    if (sampler.current && sampleBank[pad.id] && !loading) {
    }
  };

  const handleSelectPad = (pad: IPad) => {
    //set selected pad to the pads Id
    setSelectedPad(pad);
    handleSamplePlay(pad);
    //if there is a sample attached to this pad set that as the selected sample
  };

  return (
    <SamplrStyles>
      <div id="SCREEN_AREA">
        <div className="screen" />
        <div>{loading ? "Loading" : "Choose Sample"}</div>
        <Flex>
          <FileBrowserButton onChange={loadSample} disabled={!selectedPad} />
          <Button>Sample</Button>
        </Flex>
      </div>
      <div>Something</div>
      <PadBank
        onPadClick={handleSelectPad}
        selectedPad={selectedPad ? selectedPad.id : ""}
      />
    </SamplrStyles>
  );
};

export default Samplr;
